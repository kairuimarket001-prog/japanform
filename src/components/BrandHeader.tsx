export default function BrandHeader() {
  return (
    <div className="absolute top-12 left-6 md:top-16 md:left-8 z-20 flex items-center gap-3">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="24" cy="24" r="22" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />
          <path
            d="M18 20 L24 16 L30 20"
            stroke="#1E3A8A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M16 26 C16 26, 18 22, 24 22 C30 22, 32 26, 32 26"
            stroke="#1E3A8A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="20" cy="28" r="1.5" fill="#1E3A8A" />
          <circle cx="28" cy="28" r="1.5" fill="#1E3A8A" />
          <path
            d="M20 30 C20 30, 22 32, 24 32 C26 32, 28 30, 28 30"
            stroke="#1E3A8A"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <text x="24" y="18" fontSize="8" fill="#1E3A8A" textAnchor="middle" fontWeight="bold">AI</text>
        </svg>
      </div>
      <div>
        <h1 className="text-lg md:text-xl font-bold text-blue-700 leading-none">
          AI株価インテリジェンス
        </h1>
      </div>
    </div>
  );
}
