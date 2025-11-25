import { memo } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { StockPrice } from '../types/stock';

interface HistoricalPriceCardProps {
  price: StockPrice;
}

function HistoricalPriceCard({ price }: HistoricalPriceCardProps) {
  const changeValue = parseFloat(price.change.replace(/,/g, ''));
  const isPositive = changeValue > 0;
  const isNegative = changeValue < 0;

  const getTrendColor = () => {
    if (isPositive) return 'text-emerald-600';
    if (isNegative) return 'text-red-500';
    return 'text-gray-500';
  };

  const getTrendBgColor = () => {
    if (isPositive) return 'bg-emerald-50';
    if (isNegative) return 'bg-red-50';
    return 'bg-gray-50';
  };

  const TrendIcon = isPositive ? TrendingUp : isNegative ? TrendingDown : Minus;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 min-h-[90px] flex items-center">
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-gray-900 whitespace-nowrap">
            {price.date}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">
            始値 {price.open}円
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="text-2xl font-bold text-gray-900">
            {price.close}
          </div>
          <div className="text-xs text-gray-500">
            円
          </div>
        </div>

        <div className={`flex-1 text-right ${getTrendColor()}`}>
          <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full ${getTrendBgColor()}`}>
            <TrendIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {isPositive && '+'}{price.changePercent}
            </span>
          </div>
          <div className="text-xs mt-1">
            {isPositive && '+'}{price.change}円
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HistoricalPriceCard);
