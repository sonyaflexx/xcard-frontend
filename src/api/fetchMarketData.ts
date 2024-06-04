import { CoinMarketCapData, MarketData } from "@/types";

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=100';

export async function fetchMarketData(): Promise<MarketData> {
  try {
    const response = await fetch(API_URL);
    const data: CoinMarketCapData[] = await response.json();

    const marketData: MarketData = {
      Trending: [],
      GameFi: [],
      DeFi: [],
      NFTs: [],
      Meme: [],
      Lending: [],
    };

    for (const item of data) {
      if (item.tags) {
        const category = item.tags.find((tag) => ['Trending', 'GameFi', 'DeFi', 'NFTs', 'Meme', 'Lending'].includes(tag));
        if (category) {
          marketData[category].push(item);
        }
      }
    }

    return marketData;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
}