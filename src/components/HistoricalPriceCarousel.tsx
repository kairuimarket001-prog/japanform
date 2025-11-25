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

export default function HistoricalPriceCarousel({ prices, stockCode, stockName }: HistoricalPriceCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const hasData = prices && prices.length > 0;
  const displayPrices = hasData ? prices.slice(0, 10) : createPlaceholderPrices();

  const SCROLL_INTERVAL = 3000;

  useEffect(() => {
    if (isPaused || displayPrices.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % displayPrices.length);
        setIsAnimating(false);
      }, 600);
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, displayPrices.length]);

  const currentCard = displayPrices[currentIndex];
  const nextCard = displayPrices[(currentIndex + 1) % displayPrices.length];

  return (
    <div className="w-full max-w-[400px] mx-auto px-4">
      <div className="mb-6 text-center">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          {stockCode || '---'} {stockName || '---'}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">過去の株価推移</p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: '110px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="absolute inset-0 transition-transform duration-600 ease-in-out"
          style={{
            transform: isAnimating ? 'translateY(-110px)' : 'translateY(0)',
          }}
        >
          <div className="h-[110px] flex items-center">
            <HistoricalPriceCard
              price={currentCard}
              isFocused={true}
              position={0}
            />
          </div>
        </div>

        <div
          className="absolute inset-0 transition-transform duration-600 ease-in-out"
          style={{
            transform: isAnimating ? 'translateY(0)' : 'translateY(110px)',
          }}
        >
          <div className="h-[110px] flex items-center">
            <HistoricalPriceCard
              price={nextCard}
              isFocused={true}
              position={0}
            />
          </div>
        </div>
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
