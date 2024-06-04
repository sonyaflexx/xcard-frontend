'use client'

import React from 'react';
import { CoinMarketCapData } from '@/types';

interface MarketGridProps {
  marketData: CoinMarketCapData[];
}

const MarketGrid: React.FC<MarketGridProps> = ({ marketData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {marketData.map((coin, index) => (
        <div key={coin.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{index + 1}. {coin.name}</span>
            <span className="text-sm">{coin.symbol}</span>
          </div>
          <div className="mt-2">
            <p className="text-xl font-semibold">${coin.quote.USD.price.toFixed(2)}</p>
            <p className={`text-sm ${coin.quote.USD.percent_change_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {coin.quote.USD.percent_change_24h.toFixed(2)}%
            </p>
            <p className="text-sm">Market Cap: ${coin.quote.USD.market_cap.toLocaleString()}</p>
          </div>
          <div className="mt-2">
            {/* Здесь можно вставить график за последние 7 дней */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketGrid;
