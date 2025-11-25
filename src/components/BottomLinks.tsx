interface BottomLinksProps {
  onCreateAccount: () => void;
}

export default function BottomLinks({ onCreateAccount }: BottomLinksProps) {
  return (
    <div className="mt-8 space-y-3 text-center">
      <div>
        <a
          href="/contact"
          className="text-sm text-fintech-text-secondary hover:text-fintech-text-primary transition-colors duration-200"
        >
          認証に問題があります
        </a>
      </div>
      <div>
        <button
          onClick={onCreateAccount}
          className="text-sm text-fintech-success hover:text-fintech-success-hover font-semibold transition-colors duration-200 flex items-center gap-1 justify-center mx-auto group"
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
