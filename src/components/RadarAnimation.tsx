import { useEffect, useState } from 'react';

interface Stock {
  description: string;
  name: string;
}

interface StockPosition {
  stock: Stock;
  x: number;
  y: number;
  angle: number;
}

export default function RadarAnimation() {
  const [stocks, setStocks] = useState<StockPosition[]>([]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    fetch('/assets/stock.json')
      .then(res => res.json())
      .then((data: Stock[]) => {
        const selectedStocks = [];
        const count = 8;
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * data.length);
          selectedStocks.push(data[randomIndex]);
        }

        const positions: StockPosition[] = selectedStocks.map((stock, i) => {
          const angle = (Math.random() * 360);
          const distance = 30 + Math.random() * 50;
          const rad = (angle * Math.PI) / 180;

          return {
            stock,
            x: 100 + Math.cos(rad) * distance,
            y: 100 + Math.sin(rad) * distance,
            angle
          };
        });

        setStocks(positions);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const isStockHighlighted = (stockAngle: number) => {
    const normalizedRotation = rotation % 360;
    const angleDiff = Math.abs(normalizedRotation - stockAngle);
    const minDiff = Math.min(angleDiff, 360 - angleDiff);
    return minDiff < 30;
  };

  const brandColor = '#0b76bd';
  const lightColor = '#b3d9f2';

  return (
    <div className="relative w-full max-w-sm mx-auto my-6">
      <div className="relative w-full aspect-square rounded-lg p-6" style={{ backgroundColor: '#f0f8ff' }}>
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="meshPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke={lightColor} strokeWidth="0.5" opacity="0.4" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="200" height="200" fill="url(#meshPattern)" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center p-8">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={brandColor} stopOpacity="0.2" />
                <stop offset="100%" stopColor={brandColor} stopOpacity="0" />
              </radialGradient>

              <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={brandColor} stopOpacity="0" />
                <stop offset="50%" stopColor={brandColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={brandColor} stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="100" cy="100" r="90" fill="url(#radarGlow)" />

            <circle cx="100" cy="100" r="85" fill="none" stroke={lightColor} strokeWidth="1.5" opacity="0.5" />
            <circle cx="100" cy="100" r="65" fill="none" stroke={lightColor} strokeWidth="1" opacity="0.4" />
            <circle cx="100" cy="100" r="45" fill="none" stroke={lightColor} strokeWidth="1" opacity="0.4" />
            <circle cx="100" cy="100" r="25" fill="none" stroke={lightColor} strokeWidth="1" opacity="0.4" />

            <line x1="100" y1="15" x2="100" y2="185" stroke={lightColor} strokeWidth="0.5" opacity="0.3" />
            <line x1="15" y1="100" x2="185" y2="100" stroke={lightColor} strokeWidth="0.5" opacity="0.3" />

            <g transform={`rotate(${rotation} 100 100)`}>
              <path
                d="M 100 100 L 100 15 A 85 85 0 0 1 185 100 Z"
                fill="url(#scanGradient)"
                opacity="0.4"
              />
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="15"
                stroke={brandColor}
                strokeWidth="2"
                opacity="0.8"
              />
            </g>

            <circle cx="100" cy="100" r="3" fill={brandColor} />

            {stocks.map((stockPos, index) => {
              const isHighlighted = isStockHighlighted(stockPos.angle);
              return (
                <g key={index}>
                  <circle
                    cx={stockPos.x}
                    cy={stockPos.y}
                    r="2.5"
                    fill={brandColor}
                    opacity={isHighlighted ? 0.9 : 0.3}
                    style={{ transition: 'opacity 0.3s' }}
                  />
                  <text
                    x={stockPos.x}
                    y={stockPos.y - 6}
                    fontSize="6"
                    fill={brandColor}
                    textAnchor="middle"
                    opacity={isHighlighted ? 1 : 0.3}
                    style={{
                      fontWeight: isHighlighted ? 'bold' : 'normal',
                      transition: 'opacity 0.3s, font-weight 0.3s'
                    }}
                  >
                    {stockPos.stock.description}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center mt-32">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: brandColor }}>
              スキャン中
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
