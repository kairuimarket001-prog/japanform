export default function WelcomeSection() {
  const brandColor = '#0b76bd';

  return (
    <div className="hidden md:flex flex-col justify-center items-start px-12 lg:px-20 h-full">
      <div className="max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ color: brandColor }}>
          AI株価診断へようこそ
        </h2>
        <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: brandColor }}>
          プロフェッショナルなAI分析で、あなたの投資判断をサポートします。証券コードを入力して、詳細な銘柄分析レポートを今すぐ取得。
        </p>

        <div className="flex items-center gap-4 mt-12">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold" style={{ background: `linear-gradient(to bottom right, ${brandColor}, #0a5a8f)` }}>
              AI
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: `linear-gradient(to bottom right, ${brandColor}, #0a5a8f)` }}>
              ✓
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs" style={{ background: `linear-gradient(to bottom right, ${brandColor}, #0a5a8f)` }}>
              📊
            </div>
          </div>
          <p className="text-sm" style={{ color: brandColor }}>
            信頼される分析ツール
          </p>
        </div>
      </div>
    </div>
  );
}
