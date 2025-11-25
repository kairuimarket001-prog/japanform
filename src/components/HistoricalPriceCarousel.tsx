import { useState, useEffect } from 'react';
import HistoricalPriceCard from './HistoricalPriceCard';
import { StockPrice } from '../types/stock';

interface HistoricalPriceCarouselProps {
  prices: StockPrice[];
  stockCode?: string;
  stockName?: string;
}

const createPlaceholderPrices = (): StockPrice[] => {
  return Array.from({ length: 8 }, () => ({
    date: '---',
    open: '---',
    high: '---',
    low: '---',
    close: '---',
    change: '0',
    changePercent: '---',
    volume: '---',
  }));
};

interface CardStyle {
  width: string;
  opacity: number;
  blur: string;
  scale: number;
  zIndex: number;
  translateY: number;
}

const getCardStyle = (position: number): CardStyle => {
  const styles: Record<string, CardStyle> = {
    '-2': { width: '70%', opacity: 0.4, blur: 'backdrop-blur-md', scale: 0.88, zIndex: 1, translateY: -40 },
    '-1': { width: '85%', opacity: 0.6, blur: 'backdrop-blur-sm', scale: 0.94, zIndex: 2, translateY: -20 },
    '0': { width: '100%', opacity: 1.0, blur: '', scale: 1.0, zIndex: 3, translateY: 0 },
    '1': { width: '85%', opacity: 0.6, blur: 'backdrop-blur-sm', scale: 0.94, zIndex: 2, translateY: 20 },
    '2': { width: '70%', opacity: 0.4, blur: 'backdrop-blur-md', scale: 0.88, zIndex: 1, translateY: 40 },
  };

  return styles[position.toString()] || styles['2'];
};

export default function HistoricalPriceCarousel({ prices, stockCode, stockName }: HistoricalPriceCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasData = prices && prices.length > 0;
  const displayPrices = hasData ? prices.slice(0, 10) : createPlaceholderPrices();

  const SCROLL_INTERVAL = 3000;
  const VISIBLE_POSITIONS = [-2, -1, 0, 1, 2];

  useEffect(() => {
    if (isPaused || displayPrices.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayPrices.length);
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, displayPrices.length]);

  const getCardAtPosition = (offset: number): StockPrice | null => {
    const index = (currentIndex + offset + displayPrices.length) % displayPrices.length;
    return displayPrices[index];
  };

  return (
    <div className="w-full max-w-[400px] mx-auto px-4">
      <div className="mb-6 text-center">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          {stockCode || '---'} {stockName || '---'}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">過去の株価推移</p>
      </div>

      <div
        className="relative"
        style={{ height: '480px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {VISIBLE_POSITIONS.map((position) => {
          const card = getCardAtPosition(position);
          if (!card) return null;

          const style = getCardStyle(position);
          const isCenter = position === 0;

          return (
            <div
              key={`${position}-${currentIndex}`}
              className={`
                absolute left-0 right-0 mx-auto
                transition-all duration-600 ease-in-out
                ${style.blur}
                ${isCenter ? 'hover:scale-[1.02] cursor-pointer' : ''}
              `}
              style={{
                width: style.width,
                opacity: style.opacity,
                transform: `translateY(calc(-50% + ${style.translateY}px)) scale(${style.scale})`,
                zIndex: style.zIndex,
                top: '50%',
                willChange: 'transform, opacity, filter',
              }}
            >
              <HistoricalPriceCard
                price={card}
                isFocused={isCenter}
                position={position}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {displayPrices.slice(0, Math.min(5, displayPrices.length)).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"></div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
