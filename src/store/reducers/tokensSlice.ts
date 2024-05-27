import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Token } from '@/types';
import axios from 'axios';

interface TokensState {
  items: Token[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TokensState = {
  items: [
    {
        id: 1,
        name: 'Bitcoin',
        logo: 'https://onekey-asset.com/assets/btc/btc.png',
        price: 38000,
        change: -2.5,
        symbol: 'BTC'
      },
      {
        id: 2,
        name: 'Ethereum',
        logo: 'https://onekey-asset.com/assets/eth/eth.png',
        price: 2700,
        change: 1.8,
        symbol: 'ETH',
      },
      {
        id: 3,
        name: 'Solana',
        logo: 'https://onekey-asset.com/assets/sol/sol.png',
        price: 200,
        change: -0.5,
        symbol: 'SOL',
      },
  ],
  status: 'idle',
  error: null,
};

export const fetchTokens = createAsyncThunk('tokens/fetchTokens', async () => {
  const response = await axios.get('/api/tokens');
  return response.data;
});

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<Token>) => {
      state.items.push(action.payload);
    },
    removeToken: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(token => token.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTokens.fulfilled, (state, action: PayloadAction<Token[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTokens.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export const { addToken, removeToken } = tokensSlice.actions;

export default tokensSlice.reducer;