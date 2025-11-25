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
            &copy; {currentYear} AI Stock Analysis. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            This tool provides information for reference purposes only and does not constitute
            investment advice. Investment decisions are your sole responsibility. AI-generated
            content may contain errors. Always verify information independently.
          </p>
        </div>
      </div>
    </footer>
  );
}
