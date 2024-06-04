import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Account, AccountState, Wallet, Settings } from '@/types';
import { instance } from '@/api/auth';

export const fetchAccountData = createAsyncThunk<Account>(
  'account/fetchAccountData',
  async () => {
    const response = await instance.get('/users/me');
    return response.data;
  }
);

export const createWallet = createAsyncThunk<Wallet, Wallet>(
  'account/createWallet',
  async (newWallet) => {
    const response = await instance.post('/accounts', newWallet);
    return response.data;
  }
);

export const updateWallet = createAsyncThunk<Wallet, Wallet>(
  'account/updateWallet',
  async (updatedWallet) => {
    const response = await instance.patch(`/accounts`, updatedWallet);
    return response.data;
  }
);

export const deleteWallet = createAsyncThunk<any, any>(
  'account/deleteWallet',
  async (deletedWallet) => {
    const response = await instance.delete(`/accounts/${deletedWallet.id}`);
    return { response, deletedWallet };
  }
);

export const switchActiveWallet = createAsyncThunk<any, Wallet>(
  'account/switchActiveWallet',
  async (wallet) => {
    const response = await instance.post(`/accounts/change`, wallet);
    return { response, wallet };
  }
);

const initialAccountState: AccountState = {
  wallets: [

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountData.pending, (state) => {
        state.status.fetchAccountData = 'loading';
        state.error.fetchAccountData = null;
      })
      .addCase(fetchAccountData.fulfilled, (state, action: PayloadAction<Account>) => {
        state.status.fetchAccountData = 'succeeded';
        state.wallets = action.payload.wallets;
        state.activeWalletId = action.payload.settings.selectedWalletId;
        console.log(state.activeWalletId)
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
      })
      .addCase(switchActiveWallet.fulfilled, (state, action) => {
        state.activeWalletId = action.payload.wallet.id;
      })
      .addCase(deleteWallet.fulfilled, (state, action: any) => {
        state.activeWalletId = action.payload.response.data.lastAccountId;
        state.wallets = state.wallets.filter(wallet => wallet.id !== action.payload.deletedWallet.id);
      });
}});

export default accountSlice.reducer;