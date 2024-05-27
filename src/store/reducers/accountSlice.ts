import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Account, AccountState, Wallet } from '@/types';
import { instance } from '@/api/auth';

export const fetchAccountData = createAsyncThunk<Account>(
  'account/fetchAccountData',
  async () => {
    const response = await instance.get('/me');
    return response.data;
  }
);

export const createWallet = createAsyncThunk<Wallet, Wallet>(
  'account/createWallet',
  async (newWallet) => {
    const response = await instance.post('/wallets/create', newWallet);
    return response.data;
  }
);

const initialAccountState: AccountState = {
  wallets: [
    {
      address: 'qwew8W8289d929sK2k28dsj2mx',
      name: 'My Wallet',
      avatar: '🔱',
      avatarBgColor: 'rgb(227, 177, 103)',
      tokens: undefined,
      transactions: undefined,
    }
  ],
  activeWalletAddress: 'qwew8W8289d929sK2k28dsj2mx',
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
      const index = state.wallets.findIndex((w) => w.address === updatedWallet.address);
      if (index !== -1) {
        state.wallets[index] = updatedWallet;
      }
    },
    switchActiveWallet: (state, action: PayloadAction<string>) => {
      const newActiveWalletAddress = action.payload;
      const walletIndex = state.wallets.findIndex((wallet) => wallet.address === newActiveWalletAddress);

      if (walletIndex !== -1) {
        state.activeWalletAddress = newActiveWalletAddress;
        localStorage.setItem('activeWalletAddress', state.activeWalletAddress);
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
        state.activeWalletAddress = action.payload.wallets[0].address;
      })
      .addCase(fetchAccountData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch account data';
      })
      .addCase(createWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createWallet.fulfilled, (state, action: PayloadAction<Wallet>) => {
        state.status = 'succeeded';
        state.wallets.push(action.payload);
        state.activeWalletAddress = action.payload.address;
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to create wallet';
      });
  },
});

export const { updateWallet, switchActiveWallet } = accountSlice.actions;

export default accountSlice.reducer;