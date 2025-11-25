import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              Important Disclaimer
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong>This is not investment advice.</strong> The information provided by this AI tool
                is for reference purposes only and should not be considered as financial or investment advice.
              </p>
              <p>
                AI-generated analysis may contain errors or inaccuracies. Past performance does not guarantee
                future results. Always conduct your own research and consult with qualified financial professionals
                before making investment decisions.
              </p>
              <p>
                AKYI Corporation provides this tool as-is and assumes no liability for any investment decisions
                made based on the information provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
