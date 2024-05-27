import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNotification: false,
  message: '',
  duration: 0,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.showNotification = true;
      state.message = action.payload.message;
      state.duration = action.payload.duration;
    },
    hideNotification(state) {
      state.showNotification = false;
      state.message = '';
      state.duration = 0;
    },
  },
});

export const { showNotification, hideNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;