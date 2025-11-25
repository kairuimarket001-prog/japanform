import { useEffect, useState } from 'react';

interface DiagnosisLoadingOverlayProps {
  isVisible: boolean;
  progress: number;
  onComplete?: () => void;
}

export default function DiagnosisLoadingOverlay({
  isVisible,
  progress,
  onComplete
}: DiagnosisLoadingOverlayProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress >= 100 && isVisible) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setIsExiting(false);
    }
  }, [progress, isVisible, onComplete]);

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible]);

  if (!isVisible && !isExiting) return null;

  const brandColor = '#0b76bd';
  const lightBrand = '#b3d9f2';
  const bgLight = '#f0f8ff';

  return (
    <div
      className={`fixed inset-0 z-[9997] flex items-center justify-center p-4 backdrop-blur-md transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ touchAction: 'none', backgroundColor: 'rgba(11, 118, 189, 0.1)' }}
    >
      <div className={`w-[95%] max-w-2xl transition-transform duration-500 ${
        isExiting ? 'scale-95' : 'scale-100'
      }`}>
        <div
          className="border-2 rounded-2xl shadow-2xl p-8"
          style={{
            background: 'linear-gradient(to bottom right, #ffffff, #f0f8ff)',
            borderColor: lightBrand
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <div
                className="absolute inset-0 rounded-full animate-pulse opacity-50"
                style={{ backgroundColor: lightBrand }}
              ></div>
              <div
                className="absolute inset-2 rounded-full flex items-center justify-center"
                style={{ backgroundColor: brandColor }}
              >
                <span className="text-4xl">🤖</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 text-center" style={{ color: brandColor }}>AI分析を実行中</h3>
            <p className="text-sm text-center" style={{ color: brandColor }}>市場データを深度分析しています...</p>
          </div>

          <div className="relative w-full h-3 rounded-full overflow-hidden mb-3 border" style={{ backgroundColor: bgLight, borderColor: lightBrand }}>
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 ease-out"
              style={{
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: brandColor,
                boxShadow: `0 0 20px ${brandColor}40`
              }}
            />
          </div>

          <div className="mb-6 text-center">
            <span className="text-sm font-semibold" style={{ color: brandColor }}>
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>

          <div className="border-2 rounded-lg p-6 backdrop-blur-sm" style={{ backgroundColor: bgLight, borderColor: lightBrand }}>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-center text-base" style={{ color: brandColor }}>
                📊 AIが複数の指標を総合的に評価中
              </p>
              <p className="text-center" style={{ color: brandColor }}>
                しばらくお待ちください
              </p>
              <div className="pt-3 border-t" style={{ borderColor: lightBrand }}>
                <p className="text-xs text-center leading-relaxed" style={{ color: brandColor }}>
                  すべてのデータは公開されている市場情報を使用しており、公開市場データに基づいて分析を行っています。本分析は最新のAI技術により、財務指標、業界動向、市場トレンドを総合的に評価しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
