export default function WelcomeSection() {
  return (
    <div className="hidden md:flex flex-col justify-center items-start px-12 lg:px-20 h-full">
      <div className="max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4 leading-tight">
          AI株価診断へようこそ
        </h2>
        <p className="text-base lg:text-lg text-blue-600 leading-relaxed mb-8">
          プロフェッショナルなAI分析で、あなたの投資判断をサポートします。証券コードを入力して、詳細な銘柄分析レポートを今すぐ取得。
        </p>

        <div className="flex items-center gap-4 mt-12">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
              AI
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              ✓
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs">
              📊
            </div>
          </div>
          <p className="text-sm text-blue-600">
            信頼される分析ツール
          </p>
        </div>
      </div>
    </div>
  );
}
