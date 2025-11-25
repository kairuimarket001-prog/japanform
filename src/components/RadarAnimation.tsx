export default function RadarAnimation() {
  return (
    <div className="relative w-full max-w-md mx-auto my-6">
      <div className="relative w-full aspect-square bg-blue-50 rounded-lg p-8">
        <pattern id="meshPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#93C5FD" strokeWidth="0.5" opacity="0.6" />
        </pattern>
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="200" height="200" fill="url(#meshPattern)" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center p-12">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="100" cy="100" r="95" fill="url(#radarGlow)" />

            <circle cx="100" cy="100" r="90" fill="none" stroke="#93C5FD" strokeWidth="1.5" opacity="0.6" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#93C5FD" strokeWidth="1" opacity="0.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#93C5FD" strokeWidth="1" opacity="0.5" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="#93C5FD" strokeWidth="1" opacity="0.5" />

            <line x1="100" y1="10" x2="100" y2="190" stroke="#93C5FD" strokeWidth="0.5" opacity="0.4" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="#93C5FD" strokeWidth="0.5" opacity="0.4" />

            <g className="animate-radar-scan" style={{ transformOrigin: '100px 100px' }}>
              <path
                d="M 100 100 L 100 10 A 90 90 0 0 1 190 100 Z"
                fill="url(#scanGradient)"
                opacity="0.5"
              />
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="10"
                stroke="#60A5FA"
                strokeWidth="2"
                opacity="0.9"
              />
            </g>

            <circle cx="100" cy="100" r="4" fill="#60A5FA" className="animate-radar-pulse" />

            <circle cx="100" cy="40" r="3" fill="#60A5FA" opacity="0.8">
              <animate
                attributeName="r"
                values="3;6;3"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="140" cy="70" r="2.5" fill="#60A5FA" opacity="0.7">
              <animate
                attributeName="r"
                values="2.5;5;2.5"
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
              />
              <animate
                attributeName="opacity"
                values="0.7;0.3;0.7"
                dur="2s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>

            <circle cx="60" cy="130" r="2" fill="#60A5FA" opacity="0.6">
              <animate
                attributeName="r"
                values="2;4;2"
                dur="1.8s"
                repeatCount="indefinite"
                begin="1s"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur="1.8s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center mt-32">
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider">
              スキャン中
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
