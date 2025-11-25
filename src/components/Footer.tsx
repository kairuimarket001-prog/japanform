import { Link } from 'react-router-dom';
import { FileText, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/company"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Company Information
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/specified-commercial-transaction-act"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Commercial Transaction Act
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Form
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>contact@financidsdgroup.jp</span>
              </li>
              <li className="text-gray-600">
                +81 3-5555-1272
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-700 mb-4 font-medium">
            &copy; {currentYear} AKYI Corporation (Kabushikigaisha AKYI). All rights reserved.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
            The information provided on this website is for reference purposes only and does not constitute
            investment advice or solicitation. Investment decisions are your sole responsibility.
            While we strive for accuracy, we do not guarantee the accuracy, safety, or usefulness of the content.
          </p>

          <div className="text-xs text-gray-600 space-y-1">
            <p>AKYI Corporation (Kabushikigaisha AKYI)</p>
            <p>〒100-0064 5-7-1 Otemachi, Chiyoda-ku, Tokyo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
