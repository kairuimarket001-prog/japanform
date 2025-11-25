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


export default function RefactoredHome() {
  const urlParams = useUrlParams();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [diagnosisState, setDiagnosisState] = useState<DiagnosisState>('initial');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [diagnosisStartTime, setDiagnosisStartTime] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [showLoadingScene, setShowLoadingScene] = useState<boolean>(false);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
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
    setIsStreaming(true);
    setLoadingProgress(0);
    setShowLoadingScene(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setShowLoadingScene(false);

      const fixedText = 'The analysis report for the current stock has been fully completed.';

      for (let i = 0; i <= fixedText.length; i++) {
        setAnalysisResult(fixedText.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 30));
      }

      setIsStreaming(false);

      await userTracking.trackDiagnosis({
        stockCode: inputValue.trim(),
        stockName: inputValue.trim(),
        success: true,
        durationMs: Date.now() - diagnosisStartTime
      });

      setDiagnosisState('results');
    } catch (error) {
      console.error('Diagnosis error:', error);
      setError('Failed to generate analysis. Please try again.');
      setDiagnosisState('initial');
      setIsStreaming(false);
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
        onReportDownload={handleLineConversion}
        isStreaming={isStreaming}
        isConnecting={diagnosisState === 'connecting'}
      />
    </div>
  );
}
