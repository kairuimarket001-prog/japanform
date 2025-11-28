export default function ModernGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)'
        }}
      >
        {/* Decorative curved arcs in top-left corner */}
        <div
          className="absolute"
          style={{
            top: '-400px',
            left: '-400px',
            width: '1200px',
            height: '1200px',
            border: '3px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />
        <div
          className="absolute"
          style={{
            top: '-300px',
            left: '-300px',
            width: '900px',
            height: '900px',
            border: '3px solid rgba(255, 255, 255, 0.20)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />
        <div
          className="absolute"
          style={{
            top: '-200px',
            left: '-200px',
            width: '600px',
            height: '600px',
            border: '3px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        {/* + symbols - distributed across the screen */}
        {/* Top-left area */}
        <div className="absolute top-[8%] left-[8%] text-white/20 text-5xl animate-pulse" style={{ animationDuration: '3s' }}>
          +
        </div>
        <div className="absolute top-[12%] left-[18%] text-white/15 text-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          +
        </div>
        <div className="absolute top-[20%] left-[5%] text-white/10 text-4xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          +
        </div>
        <div className="absolute top-[6%] left-[25%] text-white/15 text-2xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
          +
        </div>
        <div className="absolute top-[18%] left-[12%] text-white/10 text-6xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.2s' }}>
          +
        </div>

        {/* Top-right area */}
        <div className="absolute top-[8%] right-[12%] text-white/20 text-5xl animate-pulse" style={{ animationDuration: '3s' }}>
          +
        </div>
        <div className="absolute top-[15%] right-[20%] text-white/15 text-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.3s' }}>
          +
        </div>
        <div className="absolute top-[10%] right-[8%] text-white/10 text-4xl animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>
          +
        </div>
        <div className="absolute top-[22%] right-[15%] text-white/15 text-7xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }}>
          +
        </div>

        {/* Left-middle area */}
        <div className="absolute top-[40%] left-[8%] text-white/15 text-4xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          +
        </div>
        <div className="absolute top-[52%] left-[15%] text-white/10 text-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          +
        </div>
        <div className="absolute top-[48%] left-[5%] text-white/20 text-5xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
          +
        </div>

        {/* Center area (sparse to avoid covering main content) */}
        <div className="absolute top-[45%] left-[45%] text-white/10 text-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          +
        </div>
        <div className="absolute top-[55%] left-[50%] text-white/10 text-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
          +
        </div>

        {/* Right-middle area */}
        <div className="absolute top-[42%] right-[18%] text-white/10 text-4xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          +
        </div>
        <div className="absolute top-[50%] right-[12%] text-white/15 text-6xl animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.3s' }}>
          +
        </div>
        <div className="absolute top-[58%] right-[8%] text-white/10 text-3xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.2s' }}>
          +
        </div>

        {/* Bottom-left area */}
        <div className="absolute bottom-[20%] left-[10%] text-white/20 text-6xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
          +
        </div>
        <div className="absolute bottom-[12%] left-[18%] text-white/15 text-4xl animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '0.7s' }}>
          +
        </div>
        <div className="absolute bottom-[8%] left-[6%] text-white/10 text-2xl animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.8s' }}>
          +
        </div>

        {/* Bottom-right area */}
        <div className="absolute bottom-[15%] right-[15%] text-white/15 text-3xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
          +
        </div>
        <div className="absolute bottom-[22%] right-[8%] text-white/20 text-5xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          +
        </div>
        <div className="absolute bottom-[10%] right-[20%] text-white/10 text-7xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.2s' }}>
          +
        </div>
      </div>
    </div>
  );
}
