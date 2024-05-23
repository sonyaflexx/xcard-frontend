'use client'

import EmptyWalletNotification from "./_components/EmptyWalletNotification";
import WalletMenu from "./_components/WalletMenu";
import { useAppSelector } from "@/store/hooks";

export default function Wallet() {
  const wallets = useAppSelector((state) => state.account.wallets);

  return (
    <>
      {wallets && wallets.length > 0 ? (
        <WalletMenu />
      ) : (
        <EmptyWalletNotification />
      )}
    </>
  );
}