import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = 'Auto' | 'Dark' | 'Light';
type LanguageState = 'en' | 'es' | 'fr';
type CurrencyState = 'USD' | 'EUR' | 'RUB';

interface InterfaceSettings {
  theme: ThemeState;
  language: LanguageState;
  defaultCurrency: CurrencyState;
}

const getInitialSettings = (): InterfaceSettings => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedSettings = localStorage.getItem('interfaceSettings');
    if (savedSettings) {
      return JSON.parse(savedSettings);
    }
  }
  return {
    theme: 'Auto',
    language: 'en',
    defaultCurrency: 'USD',
  };
};

const initialState: InterfaceSettings = getInitialSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload;
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('interfaceSettings', JSON.stringify(state));
        document.documentElement.setAttribute('data-theme', action.payload.toLowerCase());
      }
    },
    setLanguage: (state, action: PayloadAction<LanguageState>) => {
      state.language = action.payload;
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('interfaceSettings', JSON.stringify(state));
      }
    },
    setDefaultCurrency: (state, action: PayloadAction<CurrencyState>) => {
      state.defaultCurrency = action.payload;
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('interfaceSettings', JSON.stringify(state));
      }
    },
  },
});

export const { setTheme, setLanguage, setDefaultCurrency } = settingsSlice.actions;
export default settingsSlice.reducer;