import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            to="/privacy"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            &copy; {currentYear} AKYI Corporation. All rights reserved.
          </p>
          <div className="space-y-2">
            <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto font-semibold">
              <strong>Important:</strong> This service is not a licensed investment advisor.
              Information provided for reference and educational purposes only.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto">
              This tool provides reference information only and does not constitute investment advice,
              investment recommendations, or financial advice. Investment decisions are your sole responsibility.
              AI-generated content may contain errors or inaccuracies. Stock investments carry risks including
              possible loss of principal. Always consult with licensed financial professionals before making
              investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
