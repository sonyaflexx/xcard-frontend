'use client'

import React, { useState, useEffect } from 'react';
import { fetchMarketData } from '@/api/fetchMarketData';
import { CoinMarketCapData } from '@/types';
import MarketGrid from './_components/MarketGrid';

const tabs = [
  { label: 'Trending', key: 'Trending' },
  { label: 'GameFi', key: 'GameFi' },
  { label: 'DeFi', key: 'DeFi' },
  { label: 'NFTs', key: 'NFTs' },
  { label: 'Meme', key: 'Meme' },
  { label: 'Lending', key: 'Lending' },
];

export default function Market() {
  const [marketData, setMarketData] = useState<CoinMarketCapData[]>([]);
  const [activeTab, setActiveTab] = useState<string>('Trending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSort = (column: string, order: 'asc' | 'desc') => {
    // Implement sorting logic here
  };

  if (marketData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="market">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 rounded ${activeTab === tab.key ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <MarketGrid marketData={marketData} />
    </div>
  );
}
