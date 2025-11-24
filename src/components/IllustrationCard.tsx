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
            <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="18" r="7" fill="#FFA07A" />
                <circle cx="24" cy="16" r="6" fill="#FFB6A3" />
                <circle cx="20" cy="16" r="1.5" fill="#1a1a1a" />
                <circle cx="28" cy="16" r="1.5" fill="#1a1a1a" />
                <path d="M20 19 Q24 21 28 19" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />
                <ellipse cx="24" cy="10" rx="8" ry="6" fill="#2C1810" />
                <path d="M16 30C16 26 19 24 24 24C29 24 32 26 32 30L32 38 L16 38Z" fill="#4A90E2" />
                <rect x="16" y="38" width="16" height="8" fill="#5AA3F5" rx="1" />
              </svg>
            </div>

            <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="18" r="7" fill="#D4A574" />
                <circle cx="24" cy="16" r="6" fill="#E8C4A0" />
                <circle cx="20" cy="16" r="1.5" fill="#1a1a1a" />
                <circle cx="28" cy="16" r="1.5" fill="#1a1a1a" />
                <path d="M21 19 Q24 20 27 19" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />
                <ellipse cx="24" cy="10" rx="8" ry="5" fill="#8B6F47" />
                <path d="M16 30C16 26 19 24 24 24C29 24 32 26 32 30L32 38 L16 38Z" fill="#E74C3C" />
                <rect x="16" y="38" width="16" height="8" fill="#FF6B6B" rx="1" />
              </svg>
            </div>

            <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="18" r="7" fill="#F5CBA7" />
                <circle cx="24" cy="16" r="6" fill="#FADBD8" />
                <circle cx="20" cy="16" r="1.5" fill="#1a1a1a" />
                <circle cx="28" cy="16" r="1.5" fill="#1a1a1a" />
                <path d="M20 20 Q24 22 28 20" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M16 10 Q24 6 32 10" fill="#FF6B9D" />
                <path d="M16 30C16 26 19 24 24 24C29 24 32 26 32 30L32 38 L16 38Z" fill="#9B59B6" />
                <rect x="16" y="38" width="16" height="8" fill="#B07CC6" rx="1" />
              </svg>
            </div>

            <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="18" r="7" fill="#C9A587" />
                <circle cx="24" cy="16" r="6" fill="#DEB887" />
                <circle cx="20" cy="16" r="1.5" fill="#1a1a1a" />
                <circle cx="28" cy="16" r="1.5" fill="#1a1a1a" />
                <path d="M21 19 Q24 21 27 19" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />
                <ellipse cx="24" cy="10" rx="8" ry="5" fill="#5D4E37" />
                <circle cx="19" cy="16" r="1" fill="#FF69B4" />
                <circle cx="29" cy="16" r="1" fill="#FF69B4" />
                <path d="M16 30C16 26 19 24 24 24C29 24 32 26 32 30L32 38 L16 38Z" fill="#27AE60" />
                <rect x="16" y="38" width="16" height="8" fill="#52D273" rx="1" />
              </svg>
            </div>
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
