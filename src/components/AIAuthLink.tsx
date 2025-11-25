interface AIAuthLinkProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function AIAuthLink({ onClick, disabled }: AIAuthLinkProps) {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className="text-fintech-link hover:text-fintech-link-hover font-medium text-base transition-colors duration-200 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
      >
        #AI認証機
      </button>
    </div>
  );
}
