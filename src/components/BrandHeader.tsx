export default function BrandHeader() {
  return (
    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-fintech-blue flex items-center justify-center shadow-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path
            d="M4 8L12 4L20 8L12 12L4 8Z"
            fill="white"
            fillOpacity="0.9"
          />
          <path
            d="M4 12L12 16L20 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 16L12 20L20 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-lg md:text-xl font-bold text-fintech-blue leading-none">
          AI株価インテリジェンス
        </h1>
      </div>
    </div>
  );
}
