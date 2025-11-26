import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last Updated: November 25, 2025</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                By accessing or using the AI Stock Information service, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you do not agree with
                any part of these terms, you may not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our service provides AI-powered stock reference information. Features include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Stock symbol search and lookup</li>
                <li>AI-generated reference reports (for educational purposes only)</li>
                <li>Market data and trends (reference information only)</li>
                <li>Educational and informational content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. No Investment Advice</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-gray-800 font-semibold mb-2">Important Disclaimer</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This service is for informational and educational purposes only and does not constitute investment
                  advice, financial advice, trading advice, investment recommendations, or any other sort of advice.
                  This service is not a licensed investment advisor. You should not
                  treat any of the service's content as investment advice or recommendations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not recommend that any investment decision be made based on information
                  provided by this service. You should always conduct your own research and consult
                  with qualified, licensed financial professionals before making any investment decisions.
                  Use of this service does not create an advisor-client relationship.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. AI-Generated Content</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our service uses artificial intelligence to generate analysis. AI-generated content
                may contain errors, inaccuracies, or outdated information. We do not guarantee the
                accuracy, completeness, or reliability of any AI-generated content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to interfere with the service's operation</li>
                <li>Not abuse, harass, or harm other users</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To the maximum extent permitted by law, we shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
                or other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your use or inability to use the service</li>
                <li>Any investment decisions made based on information from our service</li>
                <li>Errors or inaccuracies in the content</li>
                <li>Unauthorized access to or use of our servers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain service availability but do not guarantee uninterrupted access.
                We may modify, suspend, or discontinue the service at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of the service are owned by us and are
                protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the service
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Service, please contact us through our{' '}
                <Link to="/contact" className="text-blue-600 hover:underline">
                  contact form
                </Link>
                .
              </p>
            </section>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-8">
              <p className="text-sm text-gray-800 font-semibold mb-2">Risk Warning</p>
              <p className="text-sm text-gray-700">
                Investing in stocks involves risk, including possible loss of principal. Past
                performance does not guarantee future results. This service provides no guarantees
                or warranties regarding investment outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
