import { X, Loader2, FolderOpen } from 'lucide-react';
import { useEffect } from 'react';

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#1a1f3a] to-[#0f1729] rounded-lg shadow-2xl border border-[#51c4ff]/30 px-6 py-4">
        <div className="relative text-center mb-6">
          <h2 className="text-2xl font-bold text-[#51c4ff] mb-2">
            AI Stock Analysis - Reference Information
          </h2>
          <h3 className="text-xl font-bold text-[#51c4ff]">
            Completed
          </h3>
          <p className="text-xs text-[#51c4ff]/80 mt-2">
            For informational purposes only • Not investment advice
          </p>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 rounded-full hover:bg-[#51c4ff]/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-[#51c4ff]" />
          </button>
        </div>

        <div className="bg-[#0f1729]/50 rounded-lg p-6 mb-6 border border-[#51c4ff]/20">
          {isConnecting ? (
            <div className="text-center py-8">
              <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-[#51c4ff]" />
              <p className="font-semibold text-[#51c4ff]">Processing your request...</p>
              <p className="text-sm mt-2 text-[#51c4ff]/70">This may take a moment</p>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-base text-[#51c4ff] whitespace-pre-wrap">{analysis}</p>
            </div>
          )}
        </div>

        {!isConnecting && analysis && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#51c4ff]/10 rounded-lg flex items-center justify-center mb-2 border border-[#51c4ff]/30">
                    <FolderOpen className="w-8 h-8 text-[#51c4ff]" />
                  </div>
                  <p className="text-xs text-[#51c4ff] font-medium">Market Data Summary</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#7c3aed]/10 rounded-lg flex items-center justify-center mb-2 border border-[#7c3aed]/30">
                    <FolderOpen className="w-8 h-8 text-[#a78bfa]" />
                  </div>
                  <p className="text-xs text-[#51c4ff] font-medium">Technical Indicators</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center mb-2 border border-[#f59e0b]/30">
                    <FolderOpen className="w-8 h-8 text-[#fbbf24]" />
                  </div>
                  <p className="text-xs text-[#51c4ff] font-medium">Risk Information</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#10b981]/10 rounded-lg flex items-center justify-center mb-2 border border-[#10b981]/30">
                    <FolderOpen className="w-8 h-8 text-[#34d399]" />
                  </div>
                  <p className="text-xs text-[#51c4ff] font-medium">Reference Analysis</p>
                </div>
              </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-4">
              <p className="text-xs text-yellow-200 text-center leading-relaxed">
                <strong className="font-bold">Important Disclaimer:</strong> This service provides reference information only and does not constitute investment advice.
                Clicking below will redirect you to a third-party messaging service (LINE) which is separate from this analysis tool.
                Always consult qualified financial professionals before making investment decisions.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onReportDownload}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] text-white font-bold rounded-xl hover:from-[#059669] hover:to-[#047857] transition-all text-lg w-full max-w-md shadow-lg shadow-[#10b981]/30 border border-[#10b981]/50"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Continue to Additional Information</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
