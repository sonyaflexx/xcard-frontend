import { Account, AccountState, Wallet, Transaction, Token } from '@/types'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTokens = createAsyncThunk('tokens/fetchTokens', async () => {
  const response = await axios.get('/api/tokens');
  return response.data;
});

export const createWallet = createAsyncThunk('account/createWallet', async (newWallet: Wallet) => {
  const response = await axios.post('/api/wallets', newWallet);
  return response.data;
});

export const removeWallet = createAsyncThunk('account/removeWallet', async (walletId: number) => {
  await axios.delete(`/api/wallets/${walletId}`);
  return walletId;
});

const initialAccountState: AccountState = {
  wallets: [
    {
      id: 1,
      name: 'Wallet 1',
      avatar: '💩',
      avatarBgColor: '#91bc76',
      address: '0xa9FE5b2DaD931495B3d66e8D864321db5C62a83A',
    },
    {
      id: 2,
      name: 'Заначка',
      avatar: '👽',
      avatarBgColor: '#ab7dcf',
      address: '2faX92E5b2DaD9ls8SD8dks82Sda82kmSmxcv8',
    },
  ],
  activeWalletId: 1,
  card: {
    id: 1231123312331233, 
    balance: 10000.52
  },
  status: 'idle',
  error: null,
};

const accountSlice = createSlice({
  name: 'accounts',
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
      const walletIndex = state.wallets.findIndex(wallet => wallet.id === newActiveWalletId);
      
      if (walletIndex !== -1) {
        state.activeWalletId = newActiveWalletId;
        localStorage.setItem('activeWalletId', state.activeWalletId.toString());
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.fulfilled, (state, action: PayloadAction<Wallet>) => {
        state.wallets.push(action.payload);
      })
      .addCase(removeWallet.fulfilled, (state, action: PayloadAction<number>) => {
        state.wallets = state.wallets.filter((wallet) => wallet.id !== action.payload);
      })
    }
});

export const { updateWallet, switchActiveWallet } = accountSlice.actions;

export default accountSlice.reducer;