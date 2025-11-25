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
        className="w-full px-6 py-3 text-white font-semibold text-base rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        style={{
          backgroundColor: '#0b76bd',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#095a94'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0b76bd'}
      >
        AI分析レポートを取得
      </button>
    </div>
  );
}
