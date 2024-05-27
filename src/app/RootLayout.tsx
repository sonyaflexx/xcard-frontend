'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { hideNotification } from '@/store/reducers/notificationsSlice';
import Notification from '@/components/ui/Notification';
import useLocalStorage from '@/hooks/useLocalStorage';
import { RootState } from '@/store/store';
import { fetchAccountData, switchActiveWallet } from '@/store/reducers/accountSlice';
import { selectNetwork } from '@/store/reducers/networksSlice';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { showNotification, message, duration } = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.auth.token);

  const handleCloseNotification = () => {
    dispatch(hideNotification());
  };

    const [activeWalletId, setActiveWalletId] = useLocalStorage('activeWalletId', 1);
    const [activeNetworkId, setActiveNetworkId] = useLocalStorage('activeNetworkId', 1);
    const activeWallet = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeNetwork = useAppSelector((state: RootState) => state.networks.activeNetworkId)

    useEffect(() => {
      if (activeWallet !== activeWalletId) {
        dispatch(switchActiveWallet(activeWalletId));
      }
    }, [activeWalletId]);

  
    useEffect(() => {
      if (token) {
        dispatch(fetchAccountData());
      }
    }, [dispatch, token]);
  return (
    <>
      {showNotification && (
        <Notification message={message} duration={duration} onClose={handleCloseNotification} />
      )}
      {children}
    </>
  );
};

export default RootLayout;