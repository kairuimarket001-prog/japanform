export default function FinancialBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-fintech-bg">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229, 231, 235, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229, 231, 235, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
}
