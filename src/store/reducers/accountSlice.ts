import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
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

export const updateWallet = createAsyncThunk<Wallet, Wallet>(
  'account/updateWallet',
  async (updatedWallet) => {
    const response = await instance.put(`/wallets/edit/${updatedWallet.id}`, updatedWallet);
    return response.data;
  }
);

const initialAccountState: AccountState = {
  wallets: [
    {
      id: 0,
      address: '12312123',
      name: 'Wallet',
      avatar: '2',
      avatarBgColor: '#fff',
      tokens: [],
      transactions: [],
    }
  ],
  activeWalletId: 0,
  card: { id: 0, balance: 0 },
  status: {
    fetchAccountData: 'idle',
    fetchWallets: 'idle',
    createWallet: 'idle',
    updateWallet: 'idle',
  },
  error: {
    fetchAccountData: null,
    fetchWallets: null,
    createWallet: null,
    updateWallet: null,
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
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
        state.status.fetchAccountData = 'loading';
        state.error.fetchAccountData = null;
      })
      .addCase(fetchAccountData.fulfilled, (state, action: PayloadAction<Account>) => {
        state.status.fetchAccountData = 'succeeded';
        state.wallets = action.payload.wallets;
        state.card = action.payload.card;
        if (state.wallets.length > 0) {
          state.activeWalletId = state.wallets[0].id;
        }
      })
      .addCase(fetchAccountData.rejected, (state, action) => {
        state.status.fetchAccountData = 'failed';
        state.error.fetchAccountData = action.error.message ?? 'Failed to fetch account data';
      })
      .addCase(createWallet.pending, (state) => {
        state.status.createWallet = 'loading';
        state.error.createWallet = null;
      })
      .addCase(createWallet.fulfilled, (state, action: PayloadAction<Wallet>) => {
        state.status.createWallet = 'succeeded';
        state.wallets.push(action.payload);
        state.activeWalletId = action.payload.id;
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.status.createWallet = 'failed';
        state.error.createWallet = action.error.message ?? 'Failed to create wallet';
      })
      .addCase(updateWallet.pending, (state) => {
        state.status.updateWallet = 'loading';
        state.error.updateWallet = null;
      })
      .addCase(updateWallet.fulfilled, (state, action: PayloadAction<Wallet>) => {
        state.status.updateWallet = 'succeeded';
        const index = state.wallets.findIndex((w) => w.id === action.payload.id);
        if (index !== -1) {
          state.wallets[index] = action.payload;
        }
      })
      .addCase(updateWallet.rejected, (state, action) => {
        state.status.updateWallet = 'failed';
        state.error.updateWallet = action.error.message ?? 'Failed to update wallet';
      });
  },
});

export const { switchActiveWallet } = accountSlice.actions;

export default accountSlice.reducer;