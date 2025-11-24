interface ModernActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ModernActionButton({ onClick, disabled = false }: ModernActionButtonProps) {
  return (
    <div className="relative animate-fadeIn mt-6" style={{ animationDelay: '0.3s' }}>
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full text-gray-900 font-bold py-4 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          backgroundColor: disabled ? '#D1D5DB' : '#FFC93C',
          height: '56px'
        }}
      >
        <span className="text-lg">Continue</span>
      </button>
    </div>
  );
}
