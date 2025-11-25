import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StockIconSVG from './StockIconSVG';
import { useStockSearch, SearchResult } from '../hooks/useStockSearch';

interface MinimalStockInputProps {
  value: string;
  onChange: (value: string) => void;
  onStockSelect?: (code: string, name: string) => void;
}

export default function MinimalStockInput({ value, onChange, onStockSelect }: MinimalStockInputProps) {
  const { search, isLoading } = useStockSearch();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0, width: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    if (value.trim().length > 0) {
      const results = search(value);
      setSearchResults(results);
      setShowDropdown(results.length > 0);
      setCurrentPage(0);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
      setCurrentPage(0);
    }
  }, [value, search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (inputRef.current && showDropdown) {
        const rect = inputRef.current.getBoundingClientRect();
        setDropdownPosition({
          left: rect.left,
          top: rect.bottom + 12,
          width: rect.width
        });
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [showDropdown]);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const handleStockClick = (stock: SearchResult) => {
    const displayValue = `${stock.code} ${stock.name}`;
    onChange(displayValue);
    setShowDropdown(false);

    if (onStockSelect) {
      onStockSelect(stock.code, stock.name);
    }
  };

  const handleInputFocus = () => {
    if (searchResults.length > 0) {
      setShowDropdown(true);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="relative w-full">
      <div className="relative flex items-center gap-3">
        <div className="flex-shrink-0">
          <StockIconSVG className="w-5 h-5 text-fintech-text-secondary" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="証券コードまたは銘柄名を入力"
          className="flex-1 py-3 text-base text-fintech-text-primary bg-transparent border-0 border-b-2 border-fintech-border-dark focus:border-fintech-border-focus focus:outline-none placeholder-fintech-text-tertiary transition-colors duration-200"
          disabled={isLoading}
        />
      </div>

      {showDropdown && currentResults.length > 0 && (
        <div
          ref={dropdownRef}
          className="fixed z-[99999] bg-white rounded-lg shadow-fintech-card overflow-hidden animate-fadeIn border border-fintech-border"
          style={{
            left: dropdownPosition.left + 'px',
            top: dropdownPosition.top + 'px',
            width: dropdownPosition.width + 'px'
          }}
        >
          <div className="max-h-80 overflow-y-auto">
            {currentResults.map((stock, index) => (
              <button
                key={`${stock.code}-${index}`}
                onClick={() => handleStockClick(stock)}
                className="w-full px-4 py-2.5 text-left hover:bg-fintech-bg transition-colors duration-150 border-b border-fintech-border last:border-b-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="font-semibold text-fintech-text-primary whitespace-nowrap">{stock.code}</div>
                    <div className="text-sm text-fintech-text-secondary truncate" title={stock.name}>
                      {stock.name.length > 6 ? `${stock.name.slice(0, 6)}...` : stock.name}
                    </div>
                  </div>
                  <div className="text-xs text-fintech-text-secondary bg-fintech-bg px-3 py-1 rounded-full font-medium whitespace-nowrap">
                    {stock.market}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 bg-fintech-bg border-t border-fintech-border">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-fintech-text-primary bg-white border border-fintech-border rounded-full hover:bg-fintech-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                前へ
              </button>

              <div className="text-sm font-semibold text-fintech-text-primary">
                {currentPage + 1} / {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-fintech-text-primary bg-white border border-fintech-border rounded-full hover:bg-fintech-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                次へ
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {isLoading && (
        <div className="absolute left-0 right-0 top-full mt-2 text-center text-sm text-fintech-text-tertiary">
          読み込み中...
        </div>
      )}
    </div>
  );
}
