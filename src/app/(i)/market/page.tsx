import { useState, useEffect } from 'react';
import { fetchMarketData } from '@/api/fetchMarketData';
import { CoinMarketCapData, MarketData } from '@/types';
import MarketTable from "./_components/MarketTable";

const tabs = [
  { label: 'Trending', key: 'Trending' },
  { label: 'GameFi', key: 'GameFi' },
  { label: 'DeFi', key: 'DeFi' },
  { label: 'NFTs', key: 'NFTs' },
  { label: 'Meme', key: 'Meme' },
  { label: 'Lending', key: 'Lending' },
];

export default function Market() {
    const [marketData, setMarketData] = useState<MarketData | null>(null);
    const [activeTab, setActiveTab] = useState<number>(0); // Default to the first tab
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchMarketData();
        setMarketData(data);
      };
      fetchData();
    }, []);
  
    const handleTabChange = (key: string) => {
      setActiveTab(Number(key));
    };
  
    const handleSort = (column: string, order: 'desc' | 'asc') => {
      // Implement sorting logic here
    };
  
    if (!marketData) {
      return <div>Loading...</div>;
    }
  
    const filteredData = marketData[activeTab];
  
    return (
      <div>
        <div className="tabs">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => handleTabChange(tab.key)}>
              {tab.label}
            </button>
          ))}
        </div>
        <MarketTable marketData={filteredData} activeTab={activeTab} onSort={handleSort} />
      </div>
    );
  }