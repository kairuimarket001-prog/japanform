import { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import ProcessSteps from '../components/ProcessSteps';
import CleanStockInput from '../components/CleanStockInput';
import SimpleAnalysisModal from '../components/SimpleAnalysisModal';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { DiagnosisState } from '../types/diagnosis';
import { useUrlParams } from '../hooks/useUrlParams';
import { apiClient } from '../lib/apiClient';
import { userTracking } from '../lib/userTracking';
import { trackConversion, trackDiagnosisButtonClick, trackConversionButtonClick } from '../lib/googleTracking';
import { generateDiagnosisReport } from '../lib/reportGenerator';


export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingScene, setShowLoadingScene] = useState<boolean>(false);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const trackPageVisit = async () => {
      await userTracking.trackPageLoad({
        stockCode: '',
        stockName: '',
        urlParams: {
          src: urlParams.src || '',
          gclid: urlParams.gclid || '',
          racText: urlParams.racText || '',
          code: ''
        }
      });
    };

    trackPageVisit();
  }, [urlParams]);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const runDiagnosis = async () => {
    if (diagnosisState !== 'initial') return;
    if (!inputValue || !inputValue.trim()) {
      setError('Please enter a stock symbol');
      return;
    }

    trackDiagnosisButtonClick();

    setDiagnosisState('connecting');
    setDiagnosisStartTime(Date.now());
    setAnalysisResult('');
    setLoadingProgress(0);
    setShowLoadingScene(true);

    const minimumLoadingTime = 3000;
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

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);
    await new Promise(resolve => setTimeout(resolve, remainingTime));

    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }

    setLoadingProgress(100);
    setShowLoadingScene(false);
    setAnalysisResult('Your comprehensive stock analysis report has been generated.');

    await userTracking.trackDiagnosis({
      stockCode: inputValue.trim(),
      stockName: inputValue.trim(),
      success: true,
      durationMs: Date.now() - diagnosisStartTime
    });

    setDiagnosisState('results');
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
        stockCode: inputValue.trim(),
        stockName: inputValue.trim(),
        analysis: analysisResult,
        lineRedirectUrl: lineRedirectUrl
      });

      await userTracking.trackEvent({
        sessionId: sessionStorage.getItem('sessionId') || '',
        eventType: 'report_download',
        stockCode: inputValue.trim(),
        stockName: inputValue.trim(),
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
    setInputValue('');

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
        loading={diagnosisState === 'connecting'}
        error={error}
      />

      <FeatureGrid />
      <ProcessSteps />
      <DisclaimerBanner />

      <SimpleAnalysisModal
        isOpen={diagnosisState === 'results' || diagnosisState === 'connecting'}
        onClose={closeModal}
        analysis={analysisResult}
        stockCode={inputValue.trim()}
        stockName={inputValue.trim()}
        onReportDownload={handleReportDownload}
        isStreaming={false}
        isConnecting={diagnosisState === 'connecting'}
      />
    </div>
  );
}
