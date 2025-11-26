import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-900 mb-1.5 text-sm">
              Important Disclaimer
            </h3>
            <div className="text-xs text-gray-700 space-y-1.5">
              <p>
                <strong>This is not investment advice.</strong> The information provided by this AI tool
                is for reference purposes only and should not be considered as financial or investment advice.
                This service is not a licensed investment advisor.
              </p>
              <p>
                AI-generated content may contain errors or inaccuracies. Past performance does not guarantee
                future results. Stock investments carry risks including possible loss of principal.
                Always conduct your own research and consult with qualified, licensed financial professionals
                before making any investment decisions.
              </p>
              <p>
                AKYI Corporation provides this tool as-is for informational purposes only and assumes no liability
                for any investment decisions or losses incurred based on the information provided.
                Use of this service does not create an advisor-client relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
