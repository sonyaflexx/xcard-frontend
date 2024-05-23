'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { hideNotification } from '@/store/reducers/NotificationsSlice';
import Notification from '@/components/ui/Notification';
import useLocalStorage from '@/hooks/useLocalStorage';
import { RootState } from '@/store/store';
import { switchActiveWallet } from '@/store/reducers/AccountSlice';
import { selectNetwork } from '@/store/reducers/NetworksSlice';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { showNotification, message, duration } = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

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
      if (activeNetwork !== activeNetworkId) {
        dispatch(selectNetwork(activeNetworkId));
      }
    }, [activeNetworkId]);

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