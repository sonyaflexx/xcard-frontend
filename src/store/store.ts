import { configureStore } from '@reduxjs/toolkit';
import networksReducer from './reducers/NetworksSlice';
import accountReducer from './reducers/AccountSlice';
import tokensReducer from './reducers/TokensSlice';
import notificationsReducer from './reducers/NotificationsSlice';
import settingsReducer from './reducers/SettingsSlice';

export const store = configureStore({
  reducer: {
    networks: networksReducer,
    account: accountReducer,
    tokens: tokensReducer,
    notifications: notificationsReducer,
    settings: settingsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
