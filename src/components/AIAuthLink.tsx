interface AIAuthLinkProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function AIAuthLink({ onClick, disabled }: AIAuthLinkProps) {
  return (
    <div className="mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        #AI認証機
      </button>
    </div>
  );
}
