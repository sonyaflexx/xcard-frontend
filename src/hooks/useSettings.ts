import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setTheme, setLanguage, setDefaultCurrency } from '@/store/reducers/settingsSlice'
import { RootState } from '@/store/store';
import { AppDispatch } from '@/store/store';

export const useSettings = () => {
  const settings = useAppSelector((state: RootState) => state.settings);
  const dispatch: AppDispatch = useAppDispatch();

  const handleThemeChange = (newTheme: 'Auto' | 'Dark' | 'Light') => {
    dispatch(setTheme(newTheme));
  };

  const handleLanguageChange = (newLanguage: 'en' | 'es' | 'fr') => {
    dispatch(setLanguage(newLanguage));
  };

  const handleCurrencyChange = (newCurrency: 'USD' | 'EUR' | 'RUB') => {
    dispatch(setDefaultCurrency(newCurrency));
  };

  useEffect(() => {
    const root = document.documentElement;

    if (settings.theme === 'Dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (settings.theme === 'Light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('dark');
      root.classList.remove('light');
    }

    if (settings.theme === 'Auto') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkModeMediaQuery.matches) {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
    }
  }, [settings.theme]);

  return { settings, handleThemeChange, handleLanguageChange, handleCurrencyChange };
};