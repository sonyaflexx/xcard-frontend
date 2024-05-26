import { configureStore } from '@reduxjs/toolkit';
import networksReducer from './reducers/networksSlice';
import accountReducer from './reducers/accountSlice';
import tokensReducer from './reducers/tokensSlice';
import notificationsReducer from './reducers/notificationsSlice';
import settingsReducer from './reducers/settingsSlice';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    networks: networksReducer,
    account: accountReducer,
    tokens: tokensReducer,
    notifications: notificationsReducer,
    settings: settingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
