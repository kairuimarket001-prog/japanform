import { useState, useEffect, useRef } from 'react';
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
  const [currentOffset, setCurrentOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasData = prices && prices.length > 0;
  const displayPrices = hasData ? prices.slice(0, 10) : createPlaceholderPrices();
  const extendedPrices = [...displayPrices, ...displayPrices, ...displayPrices];

  const VISIBLE_CARDS = 4;
  const CARD_HEIGHT = 106;
  const CARD_GAP = 16;
  const TOTAL_CARD_HEIGHT = CARD_HEIGHT + CARD_GAP;
  const SCROLL_INTERVAL = 3000;
  const ANIMATION_DURATION = 600;

  useEffect(() => {
    if (isPaused || displayPrices.length === 0) return;

    const interval = setInterval(() => {
      setCurrentOffset((prev) => {
        const nextOffset = prev + 1;
        if (nextOffset >= displayPrices.length) {
          setTimeout(() => {
            setCurrentOffset(0);
          }, ANIMATION_DURATION);
          return nextOffset;
        }
        return nextOffset;
      });
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, displayPrices.length]);

  const translateY = -(currentOffset * TOTAL_CARD_HEIGHT);

  return (
    <div className="w-full max-w-[400px] mx-auto px-4">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-gray-900">
          {stockCode || '---'} {stockName || '---'}
        </h3>
        <p className="text-sm text-gray-600 mt-1">過去の株価推移</p>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl"
        style={{
          height: `${VISIBLE_CARDS * CARD_HEIGHT + (VISIBLE_CARDS - 1) * CARD_GAP}px`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="transition-transform ease-in-out"
          style={{
            transform: `translateY(${translateY}px)`,
            transitionDuration: currentOffset >= displayPrices.length ? '0ms' : `${ANIMATION_DURATION}ms`,
            display: 'flex',
            flexDirection: 'column',
            gap: `${CARD_GAP}px`,
          }}
        >
          {extendedPrices.map((price, index) => (
            <div
              key={`${price.date}-${index}`}
              style={{
                height: `${CARD_HEIGHT}px`,
              }}
            >
              <HistoricalPriceCard price={price} />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/90 to-transparent pointer-events-none"></div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {displayPrices.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentOffset(index)}
            className="transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === (currentOffset % displayPrices.length) ? (
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
