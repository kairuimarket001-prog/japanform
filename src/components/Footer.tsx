import { Link } from 'react-router-dom';
import { Shield, Scale, FileText, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandColor = '#0b76bd';

  return (
    <footer className="relative z-10 border-t-2 border-white/20 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Footer Links Section */}
        <div className="pt-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Legal Documents */}
            <div>
              <h4 className="font-bold drop-shadow-lg mb-3 flex items-center gap-2 text-sm" style={{ color: brandColor }}>
                <FileText className="w-4 h-4" />
                法的文書
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/company"
                    className="drop-shadow-lg hover:underline flex items-center gap-1"
                    style={{ color: brandColor }}
                  >
                    会社概要 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="drop-shadow-lg hover:underline flex items-center gap-1"
                    style={{ color: brandColor }}
                  >
                    利用規約 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="drop-shadow-lg hover:underline flex items-center gap-1"
                    style={{ color: brandColor }}
                  >
                    プライバシーポリシー <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/specified-commercial-transaction-act"
                    className="drop-shadow-lg hover:underline flex items-center gap-1"
                    style={{ color: brandColor }}
                  >
                    特定商取引法表記 <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold drop-shadow-lg mb-3 flex items-center gap-2 text-sm" style={{ color: brandColor }}>
                <Mail className="w-4 h-4" />
                お問い合わせ
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    to="/contact"
                    className="drop-shadow-lg hover:underline flex items-center gap-1"
                    style={{ color: brandColor }}
                  >
                    お問い合わせフォーム <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
                <li className="flex items-center gap-1 drop-shadow-lg" style={{ color: brandColor }}>
                  <Mail className="w-3 h-3" />
                  <span>contact@financidsdgroup.jp</span>
                </li>
                <li className="drop-shadow-lg text-xs" style={{ color: brandColor }}>
                  +81 3-5555-1272
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t pt-4 text-center" style={{ borderColor: brandColor }}>
            <p className="text-xs sm:text-sm drop-shadow-lg mb-2 font-medium" style={{ color: brandColor }}>
              &copy; {currentYear} 株式会社AKYI (Kabushikigaisha AKYI). All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs drop-shadow-lg leading-relaxed max-w-3xl mx-auto mb-4" style={{ color: brandColor }}>
              当サイトで提供される情報は投資勧誘を目的としたものではありません。
              投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
              掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
            </p>

            {/* Service Information */}
            <div className="text-[10px] sm:text-xs drop-shadow-lg space-y-1" style={{ color: brandColor }}>
              <p>株式会社AKYI（Kabushikigaisha AKYI）</p>
              <p>〒100-0064 東京都千代田区大手町5-7-1</p>
              <p>5-7-1 Otemachi, Chiyoda-ku, Tokyo</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
