import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Account, AccountState, Wallet } from '@/types';

export const fetchAccountData = createAsyncThunk<Account>(
  'account/fetchAccountData',
  async () => {
    const response = await axios.get('/api/me');
    return response.data;
  }
);

const initialAccountState: AccountState = {
  wallets: [],
  activeWalletId: null,
  card: { id: 0, balance: 0 },
  status: 'idle',
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    updateWallet: (state, action: PayloadAction<Wallet>) => {
      const updatedWallet = action.payload;
      const index = state.wallets.findIndex((w) => w.id === updatedWallet.id);
      if (index !== -1) {
        state.wallets[index] = updatedWallet;
      }
    },
    switchActiveWallet: (state, action: PayloadAction<number>) => {
      const newActiveWalletId = action.payload;
      const walletIndex = state.wallets.findIndex((wallet) => wallet.id === newActiveWalletId);

      if (walletIndex !== -1) {
        state.activeWalletId = newActiveWalletId;
        localStorage.setItem('activeWalletId', state.activeWalletId.toString());
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccountData.fulfilled, (state, action: PayloadAction<Account>) => {
        state.status = 'succeeded';
        state.wallets = action.payload.wallets;
        state.card = action.payload.card;
        state.activeWalletId = action.payload.wallets[0].id;
      })
      .addCase(fetchAccountData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch account data';
      });
  },
});

export const { updateWallet, switchActiveWallet } = accountSlice.actions;

export default accountSlice.reducer;