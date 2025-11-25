import { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import ProcessSteps from '../components/ProcessSteps';
import CleanStockInput from '../components/CleanStockInput';
import SimpleAnalysisModal from '../components/SimpleAnalysisModal';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { StockData } from '../types/stock';
import { DiagnosisState } from '../types/diagnosis';
import { useUrlParams } from '../hooks/useUrlParams';
import { apiClient } from '../lib/apiClient';
import { userTracking } from '../lib/userTracking';
import { trackConversion, trackDiagnosisButtonClick, trackConversionButtonClick } from '../lib/googleTracking';
import { generateDiagnosisReport } from '../lib/reportGenerator';


export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const [stockCode, setStockCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingScene, setShowLoadingScene] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (urlParams.code) {
      setStockCode(urlParams.code);
      setInputValue(urlParams.code);
      fetchStockData(urlParams.code);
    } else {
      setStockCode('');
      setInputValue('');
    }
  }, [urlParams.code]);

  useEffect(() => {
    const trackPageVisit = async () => {
      if (stockData) {
        await userTracking.trackPageLoad({
          stockCode: stockCode,
          stockName: stockData.info.name,
          urlParams: {
            src: urlParams.src || '',
            gclid: urlParams.gclid || '',
            racText: urlParams.racText || '',
            code: urlParams.code || ''
          }
        });
      }
    };

    trackPageVisit();
  }, [stockData, stockCode, urlParams]);

  const fetchStockData = async (code: string) => {
    const cleanCode = code.replace(/[^\d]/g, '');

    if (!cleanCode || !/^\d{4}$/.test(cleanCode)) {
      setStockData(null);
      setStockCode(cleanCode);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.get(`/api/stock/data?code=${cleanCode}`);

      if (!response.ok) {
        setStockData(null);
        setStockCode(cleanCode);
        setError(null);
        return;
      }

      const data = await response.json();
      setStockData(data);
      setStockCode(cleanCode);
      setError(null);
    } catch (err) {
      setStockData(null);
      setStockCode(cleanCode);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const handleStockSelect = (code: string, name: string) => {
    setStockCode(code);
    fetchStockData(code);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) {
        fetchStockData(inputValue);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const runDiagnosis = async () => {
    if (diagnosisState !== 'initial') return;
    if (!stockCode || !stockData) {
      setError('Please enter a valid stock symbol');
      return;
    }

    trackDiagnosisButtonClick();

    setDiagnosisState('connecting');
    setDiagnosisStartTime(Date.now());
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(true);

    const minimumLoadingTime = 2000;
    const startTime = Date.now();

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 85) {
          return prev + Math.random() * 15;
        } else if (prev < 95) {
          return prev + Math.random() * 2;
        }
        return prev;
      });
    }, 100);

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/gemini/diagnosis`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 50000);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: stockCode,
          stockData: stockData ? {
            name: stockData.info.name,
            price: stockData.info.price,
            change: stockData.info.change,
            changePercent: stockData.info.changePercent,
            per: stockData.info.per,
            pbr: stockData.info.pbr,
            dividend: stockData.info.dividend,
            industry: stockData.info.industry,
            marketCap: stockData.info.marketCap,
          } : null,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      if (!response.ok) {
        throw new Error('Analysis failed. Please try again.');
      }

      setDiagnosisState('processing');

      const contentType = response.headers.get('content-type');

      if (contentType?.includes('text/event-stream')) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let fullAnalysis = '';

        if (reader) {
          setDiagnosisState('streaming');

          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

          await new Promise(resolve => setTimeout(resolve, remainingTime));
          setShowLoadingScene(false);

          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const chunk = decoder.decode(value, { stream: true });
              const lines = chunk.split('\n');

              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  try {
                    const data = JSON.parse(line.slice(6));

                    if (data.done) {
                      setLoadingProgress(100);
                      await userTracking.trackDiagnosis({
                        stockCode: stockCode,
                        stockName: stockData?.info.name || stockCode,
                        success: true,
                        durationMs: Date.now() - diagnosisStartTime
                      });
                      setTimeout(() => {
                        setDiagnosisState('results');
                      }, 100);
                      return;
                    }

                    if (data.text) {
                      fullAnalysis += data.text;
                      setAnalysisResult(fullAnalysis);
                    }
                  } catch (parseError) {
                    console.error('Parse error:', parseError);
                  }
                }
              }
            }
          } catch (streamError) {
            console.error('Stream error:', streamError);
            throw new Error('Stream reading error');
          }
        }

        if (!fullAnalysis) {
          throw new Error('No analysis results generated');
        }

        setLoadingProgress(100);
        await userTracking.trackDiagnosis({
          stockCode: stockCode,
          stockName: stockData?.info.name || stockCode,
          success: true,
          durationMs: Date.now() - diagnosisStartTime
        });
        setDiagnosisState('results');
      } else {
        const data = await response.json();

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);
        await new Promise(resolve => setTimeout(resolve, remainingTime));
        setShowLoadingScene(false);

        if (data && data.analysis) {
          setAnalysisResult(data.analysis);
          setLoadingProgress(100);
          await userTracking.trackDiagnosis({
            stockCode: stockCode,
            stockName: stockData?.info.name || stockCode,
            success: true,
            durationMs: Date.now() - diagnosisStartTime
          });
          setDiagnosisState('results');
        } else {
          throw new Error('No analysis results returned');
        }
      }
    } catch (err: any) {
      console.error('Analysis error:', err);
      setLoadingProgress(0);

      await userTracking.trackDiagnosis({
        stockCode: stockCode,
        stockName: stockData?.info.name || stockCode,
        success: false,
        durationMs: Date.now() - diagnosisStartTime,
        errorMessage: err.message
      });

      let errorMessage = 'An error occurred during analysis';
      let errorDetails = '';

      if (err.name === 'AbortError') {
        errorMessage = 'Request timeout. Please try again.';
      } else if (err.message) {
        errorDetails = err.message;
      } else {
        if (err instanceof Error) {
          try {
            const errorResponse = JSON.parse(err.message);
            if (errorResponse.error) {
              errorMessage = errorResponse.error;
              errorDetails = errorResponse.details;
            }
          } catch {
            errorDetails = err.message;
          }
        }
      }

      setError(`${errorMessage}${errorDetails ? `\nDetails: ${errorDetails}` : ''}`);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      setTimeout(() => {
        setDiagnosisState('error');
        setShowLoadingScene(false);
        setLoadingProgress(0);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      }, remainingTime);
    }
  };

  const handleLineConversion = async () => {
    try {
      trackConversionButtonClick();

      const response = await apiClient.get('/api/line-redirects/select');

      if (!response.ok) {
        console.error('Failed to get LINE redirect link');
        alert('Failed to retrieve LINE link. Please try again later.');
        return;
      }

      const data = await response.json();

      if (!data.success || !data.link) {
        console.error('No active LINE redirect links available');
        alert('No LINE links available at this time.');
        return;
      }

      const lineUrl = data.link.redirect_url;

      trackConversion();

      if (navigator.sendBeacon) {
        const trackingData = JSON.stringify({
          sessionId: sessionStorage.getItem('sessionId') || '',
          eventType: 'conversion',
          gclid: urlParams.gclid,
          eventData: {
            conversion_time: new Date().toISOString()
          }
        });
        navigator.sendBeacon('/api/tracking/event', trackingData);
      } else {
        await userTracking.trackConversion({
          gclid: urlParams.gclid
        });
      }

      console.log('LINE conversion tracked successfully');
      window.location.href = lineUrl;
    } catch (error) {
      console.error('LINE conversion error:', error);
      alert('Operation failed. Please try again later.');
    }
  };

  const handleReportDownload = async () => {
    try {
      const response = await apiClient.get('/api/line-redirects/select');
      let lineRedirectUrl = '';

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.link) {
          lineRedirectUrl = data.link.redirect_url;
        }
      }

      await generateDiagnosisReport({
        stockCode: stockCode,
        stockName: stockData?.info.name || '',
        analysis: analysisResult,
        lineRedirectUrl: lineRedirectUrl
      });

      await userTracking.trackEvent({
        sessionId: sessionStorage.getItem('sessionId') || '',
        eventType: 'report_download',
        stockCode: stockCode,
        stockName: stockData?.info.name || '',
        eventData: {
          reportFormat: 'docx',
          timestamp: new Date().toISOString()
        }
      });

      console.log('Report download tracked successfully');
    } catch (error) {
      console.error('Report download error:', error);
      alert('Failed to download report. Please try again.');
    }
  };

  const closeModal = () => {
    setDiagnosisState('initial');
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(false);
    setDiagnosisStartTime(0);
    setError(null);
    setStockCode('');
    setInputValue('');
    setStockData(null);

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <CleanStockInput
        value={inputValue}
        onChange={setInputValue}
        onSubmit={runDiagnosis}
        loading={loading || diagnosisState === 'connecting'}
        error={error}
      />

      {stockData && diagnosisState === 'initial' && !error && (
        <div className="max-w-2xl mx-auto px-6 py-4 text-center">
          <p className="text-gray-700 mb-4">
            Stock found: <strong>{stockData.info.name}</strong> ({stockCode})
          </p>
          <button
            onClick={runDiagnosis}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Start Analysis
          </button>
        </div>
      )}

      <FeatureGrid />
      <ProcessSteps />
      <DisclaimerBanner />

      <SimpleAnalysisModal
        isOpen={diagnosisState === 'streaming' || diagnosisState === 'results'}
        onClose={closeModal}
        analysis={analysisResult}
        stockCode={stockCode}
        stockName={stockData?.info.name || stockCode}
        onReportDownload={handleReportDownload}
        isStreaming={diagnosisState === 'streaming'}
        isConnecting={diagnosisState === 'connecting'}
      />
    </div>
  );
}
