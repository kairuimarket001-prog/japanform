import { memo } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { StockPrice } from '../types/stock';

interface HistoricalPriceCardProps {
  price: StockPrice;
  isFocused?: boolean;
  position?: number;
}

function HistoricalPriceCard({ price, isFocused = false }: HistoricalPriceCardProps) {
  const isPlaceholder = price.date === '---';
  const changeValue = isPlaceholder ? 0 : parseFloat(price.change.replace(/,/g, ''));
  const isPositive = changeValue > 0;
  const isNegative = changeValue < 0;

  const getTrendColor = () => {
    if (isPlaceholder) return 'text-gray-400';
    if (isPositive) return 'text-emerald-600';
    if (isNegative) return 'text-red-500';
    return 'text-gray-500';
  };

  const getTrendBgColor = () => {
    if (isPlaceholder) return 'bg-gray-50';
    if (isPositive) return 'bg-emerald-50';
    if (isNegative) return 'bg-red-50';
    return 'bg-gray-50';
  };

  const TrendIcon = isPlaceholder ? Minus : (isPositive ? TrendingUp : isNegative ? TrendingDown : Minus);

  return (
    <div className={`
      bg-white rounded-2xl transition-all duration-300 flex items-center
      h-[90px] p-5
      ${isFocused ? 'shadow-xl' : 'shadow-md'}
    `}>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex-1 min-w-0">
          <div className={`
            text-base font-semibold whitespace-nowrap
            ${isPlaceholder ? 'text-gray-400' : 'text-gray-900'}
          `}>
            {price.date}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">
            始値 {price.open}{!isPlaceholder && '円'}
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className={`
            text-2xl font-bold
            ${isPlaceholder ? 'text-gray-400' : 'text-gray-900'}
          `}>
            {price.close}
          </div>
          <div className="text-xs text-gray-500">
            {!isPlaceholder && '円'}
          </div>
        </div>

        <div className={`flex-1 text-right ${getTrendColor()}`}>
          <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full ${getTrendBgColor()}`}>
            <TrendIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {!isPlaceholder && isPositive && '+'}{price.changePercent}
            </span>
          </div>
          <div className="text-xs mt-1">
            {!isPlaceholder && isPositive && '+'}{price.change}{!isPlaceholder && '円'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HistoricalPriceCard);
