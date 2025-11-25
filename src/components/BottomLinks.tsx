interface BottomLinksProps {
  onCreateAccount: () => void;
}

export default function BottomLinks({ onCreateAccount }: BottomLinksProps) {
  const brandColor = '#0b76bd';

  return (
    <div className="mt-8 space-y-3 text-center">
      <div>
        <a
          href="/contact"
          className="text-sm transition-colors duration-200"
          style={{ color: brandColor }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#095a94'}
          onMouseLeave={(e) => e.currentTarget.style.color = brandColor}
        >
          認証に問題があります
        </a>
      </div>
      <div>
        <button
          onClick={onCreateAccount}
          className="text-sm font-semibold transition-colors duration-200 flex items-center gap-1 justify-center mx-auto group"
          style={{ color: brandColor }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#095a94'}
          onMouseLeave={(e) => e.currentTarget.style.color = brandColor}
        >
          <span>オンラインでアカウントを作成</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
