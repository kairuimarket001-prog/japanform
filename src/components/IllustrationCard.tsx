export default function IllustrationCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto px-4">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        style={{
          transform: 'rotate(2deg)',
          background: 'repeating-conic-gradient(#a8e6a1 0% 25%, #c8f5c3 0% 50%) 50% / 20px 20px'
        }}
      >
        <div className="relative p-8 pb-16 min-h-[400px] flex flex-col">
          <div className="absolute -top-6 -left-6 z-20">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4), inset -2px -2px 8px rgba(0,0,0,0.2), inset 2px 2px 8px rgba(255,255,255,0.4)'
                }}
              />
            </div>
          </div>

          <div className="absolute top-6 right-6 z-10">
            <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="10" height="10" fill="#1a1a1a" />
                <rect x="22" y="8" width="10" height="10" fill="#1a1a1a" />
                <rect x="8" y="22" width="10" height="10" fill="#1a1a1a" />
                <rect x="22" y="22" width="10" height="10" fill="#1a1a1a" />
                <rect x="15" y="15" width="3" height="3" fill="#1a1a1a" />
                <rect x="25" y="15" width="3" height="3" fill="#1a1a1a" />
              </svg>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center mt-8 mb-12">
            <div className="text-left mb-3">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">AI</h1>
            </div>

            <div className="inline-block">
              <div
                className="px-6 py-3 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              >
                <h2 className="text-2xl font-bold text-white whitespace-nowrap">
                  株価格監視
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center space-x-[-12px] z-10">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="12" r="5" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
                  <path
                    d="M8 26C8 21 11 18 16 18C21 18 24 21 24 26"
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-10">
            <div className="relative">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="28" cy="52" rx="20" ry="3" fill="#000000" opacity="0.15" />
                <path
                  d="M28 8 L32 24 L48 24 L35 34 L40 50 L28 40 L16 50 L21 34 L8 24 L24 24 Z"
                  fill="url(#trophyGradient)"
                  stroke="#B8860B"
                  strokeWidth="1"
                />
                <rect x="24" y="46" width="8" height="6" fill="#B8860B" rx="1" />
                <rect x="20" y="52" width="16" height="3" fill="#8B7500" rx="1" />
                <defs>
                  <linearGradient id="trophyGradient" x1="28" y1="8" x2="28" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
