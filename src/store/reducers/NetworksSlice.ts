import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Network {
  id: number;
  name: string;
  logo: string;
}

interface NetworksState {
  items: Network[];
  activeNetworkId: number | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}


const initialState: NetworksState = {
  items: [],
  activeNetworkId: 1,
  status: 'idle',
  error: null,
};

export const fetchNetworks = createAsyncThunk('networks/fetchNetworks', async () => {
  // const response = await axios.get('/api/networks');
  const response = { data: [
    { id: 1, name: 'Bitcoin', logo: 'https://onekey-asset.com/assets/btc/btc.png' },
    { id: 2, name: 'Ethereum', logo: 'https://onekey-asset.com/assets/eth/eth.png' },
    { id: 3, name: 'Solana', logo: 'https://onekey-asset.com/assets/sol/sol.png' },
  ]};
  return response.data;
});

export const createNetwork = createAsyncThunk('networks/createNetwork', async (newNetwork: Network) => {
    // const response = await axios.post('/api/networks', newNetwork);
    // return response.data;
    return newNetwork;
  });
  
  const networksSlice = createSlice({
    name: 'networks',
    initialState,
    reducers: {
      selectNetwork: (state, action: PayloadAction<number>) => {
        state.activeNetworkId = action.payload;
        localStorage.setItem('activeNetworkId', state.activeNetworkId.toString());
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchNetworks.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchNetworks.fulfilled, (state, action: PayloadAction<Network[]>) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchNetworks.rejected, (state, action) => {
          state.status = 'failed';
        })
        .addCase(createNetwork.fulfilled, (state, action: PayloadAction<Network>) => {
          state.items.push(action.payload);
        });
    }
  });
  
  export const { selectNetwork } = networksSlice.actions;
  
  export default networksSlice.reducer;