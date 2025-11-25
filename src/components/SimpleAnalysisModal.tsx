import { X, Download, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import AnalysisRenderer from './AnalysisRenderer';

interface SimpleAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: string;
  stockCode: string;
  stockName: string;
  onReportDownload: () => void;
  isStreaming?: boolean;
  isConnecting?: boolean;
}

export default function SimpleAnalysisModal({
  isOpen,
  onClose,
  analysis,
  stockCode,
  stockName,
  onReportDownload,
  isStreaming = false,
  isConnecting = false,
}: SimpleAnalysisModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lastLengthRef = useRef(0);

  useEffect(() => {
    if (isStreaming && contentRef.current && analysis.length > lastLengthRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
      lastLengthRef.current = analysis.length;
    }
  }, [analysis, isStreaming]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.removeAttribute('data-modal-open');
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">
              Analysis Report: {stockName} ({stockCode})
            </h2>
            {isConnecting && (
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Connecting to AI server...</span>
              </div>
            )}
            {isStreaming && !isConnecting && (
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating report...</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div
          ref={contentRef}
          className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 py-6"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-800 font-semibold mb-1">
              ⚠️ Important Disclaimer
            </p>
            <p className="text-xs text-gray-700">
              This analysis is for informational purposes only and does not constitute investment advice.
              AI-generated content may contain errors. Always verify information independently before making
              investment decisions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="prose prose-sm max-w-none">
              {isConnecting ? (
                <div className="text-center py-8">
                  <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
                  <p className="font-semibold text-gray-900">Processing your request...</p>
                  <p className="text-sm mt-2 text-gray-600">This may take a moment</p>
                </div>
              ) : (
                <div>
                  <AnalysisRenderer text={analysis} />
                  {isStreaming && (
                    <span className="inline-block w-2 h-5 animate-pulse ml-1 bg-blue-600"></span>
                  )}
                </div>
              )}
            </div>
          </div>

          {!isConnecting && !isStreaming && analysis && (
            <div className="mt-6 flex gap-3">
              <button
                onClick={onReportDownload}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Report
              </button>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-xs text-gray-600">
            <p className="font-semibold mb-2">Additional Disclaimers:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Past performance does not guarantee future results</li>
              <li>This tool provides reference information only</li>
              <li>Not a substitute for professional financial advice</li>
              <li>AKYI Corporation assumes no liability for investment decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
