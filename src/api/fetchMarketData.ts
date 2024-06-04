import { CoinMarketCapData } from '@/types';
import axios from 'axios';

export async function fetchMarketData(): Promise<CoinMarketCapData[]> {
  try {
    const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '17d6cf49-9e63-436d-b5b6-20941682b06f',
      },
      withCredentials: true
    });
    return response.data.data; // assuming response.data.data contains the array of CoinMarketCapData
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
}
