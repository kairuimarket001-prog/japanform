export default function StockIconSVG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
    >
      <path
        d="M3 20L6 17L10 21L14 15L18 18L21 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 9V15H15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6"
        cy="17"
        r="1.5"
        fill="none"
        stroke="currentColor"
      />
      <circle
        cx="10"
        cy="21"
        r="1.5"
        fill="none"
        stroke="currentColor"
      />
      <circle
        cx="14"
        cy="15"
        r="1.5"
        fill="none"
        stroke="currentColor"
      />
      <circle
        cx="18"
        cy="18"
        r="1.5"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}
