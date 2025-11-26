export default function HeroSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center animate-fadeIn">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
        Free AI Stock Analysis Tool
      </h1>
      <p className="text-lg md:text-xl text-white mb-2 leading-relaxed">
        Enter a stock symbol to receive AI-generated analysis
      </p>
      <p className="text-sm text-white/70 mb-4">
        For reference purposes only • Not investment advice
      </p>
    </div>
  );
}
