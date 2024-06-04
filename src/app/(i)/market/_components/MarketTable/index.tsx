'use client'

import { useState, useEffect } from 'react';
import { fetchMarketData } from '@/api/fetchMarketData';
import { CoinMarketCapData, MarketData } from '@/types';


function MarketTable({ marketData, activeTab, onSort }: { marketData: MarketData | null; activeTab: number; onSort: (column: string, order: 'asc' | 'desc') => void }) {
  const [sortedData, setSortedData] = useState<CoinMarketCapData[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    if (marketData && activeTab !== null) {
      setSortedData(marketData[activeTab]);
    }
  }, [marketData, activeTab]);

  // useEffect(() => {
  //   if (sortedData.length > 0 && sortColumn) {
  //     const sorted = [...sortedData].sort((a, b) => {
  //       if (a[sortColumn] < b[sortColumn]) {
  //         return sortOrder === 'asc' ? -1 : 1;
  //       } else if (a[sortColumn] > b[sortColumn]) {
  //         return sortOrder === 'asc' ? 1 : -1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setSortedData(sorted);
  //   }
  // }, [sortedData, sortColumn, sortOrder]);

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    onSort(column, sortOrder);
  };

  if (!sortedData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="header" onClick={() => handleSort('#')}>
        #
        {sortColumn === '#' && <span className={sortOrder === 'asc' ? 'asc' : 'desc'} />}
      </div>
      <div className="header" onClick={() => handleSort('name')}>
        Name
        {sortColumn === 'name' && <span className={sortOrder === 'asc' ? 'asc' : 'desc'} />}
      </div>
      <div className="header" onClick={() => handleSort('price_usd')}>
        Price
        {sortColumn === 'price_usd' && <span className={sortOrder === 'asc' ? 'asc' : 'desc'} />}
      </div>
      <div className="header" onClick={() => handleSort('percent_change_24h')}>
        24H%
        {sortColumn === 'percent_change_24h' && <span className={sortOrder === 'asc' ? 'asc' : 'desc'} />}
      </div>
      <div className="header" onClick={() => handleSort('market_cap_usd')}>
        Market Cap
        {sortColumn === 'market_cap_usd' && <span className={sortOrder === 'asc' ? 'asc' : 'desc'} />}
      </div>
      <div className="header">Last 7 Days</div>
      {sortedData.map((item, index) => (
        <div key={item.id} className="row">
          <div>{index + 1}</div>
          <div>{item.name}</div>
          <div>{item.price_usd}</div>
          <div>{item.percent_change_24h}</div>
          <div>{item.market_cap_usd}</div>
          <div>
            {/* TODO: Calculate and display last 7 days data */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MarketTable;