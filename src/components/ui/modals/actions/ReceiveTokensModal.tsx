'use client';

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { fetchNetworks, selectNetwork } from "@/store/reducers/networksSlice";
import { Token } from "@/types";
import Notification from "../../Notification";
import { showNotification, hideNotification } from "@/store/reducers/notificationsSlice";
import { useEffect } from "react";

const ReceiveTokensModal = ({ isOpen, onClose, onOpenChange }: { isOpen: boolean, onClose: () => void, onOpenChange: () => void }) => {
    const dispatch = useAppDispatch();
    const networks = useAppSelector((state: RootState) => state.networks.items);
    const activeNetworkId = useAppSelector((state: RootState) => state.networks.activeNetworkId);
    const activeNetwork = networks.find(network => network.chainId === activeNetworkId);
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);

    const tokens = useAppSelector((state: RootState) => state.tokens.items);

    const handleCopy = () => {
        dispatch(showNotification({ message: 'Address copied.', duration: 3000 }));
        activeWallet && activeWallet.address && navigator.clipboard.writeText(activeWallet.address);
    }

    return (
        <>
            <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="sm:mx-0 sm:max-w-full max-md:rounded-none max-md:m-0 max-md:size-full dark:bg-gray-600 rounded-3xl md:max-h-[90vh] md:max-w-[420px]">
                    <>
                        <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                            <div>
                                <h1>Receive</h1>
                                <div className="flex gap-2 ml-0.5">
                                    <img src={activeNetwork?.logo} width={16} height={16} />
                                    <span className="text-xs font-normal text-gray-300">{activeNetwork?.name}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={onClose} className="flex items-center justify-center border-2 dark:border-gray-400 dark:bg-gray-420 bg-gray-50 p-1 rounded-full">
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#8C8CA1" role="img"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>
                                </button>
                            </div>
                        </ModalHeader>
                        <ModalBody className="p-7">
                            <div className="flex flex-col gap-5 items-center mx-auto">
                                <p className="text-sm font-light dark:text-gray-300">Assets can only be sent within the same chain.</p>
                                <div className="h-52 w-52 dark:bg-white bg-gray-20 rounded-3xl"></div>
                                <span className="text-sm text-wrap text-center font-light dark:text-gray-300 break-all max-w-72">{ activeWallet?.address }</span>
                                <button onClick={handleCopy} type="button" className="flex gap-2 items-center text-sm border-2 dark:bg-gray-430 dark:border-gray-420 dark:hover:bg-gray-420 py-2 px-4 rounded-xl">
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M2 4.25A2.25 2.25 0 0 1 4.25 2h6.5A2.25 2.25 0 0 1 13 4.25V5.5H9.25A3.75 3.75 0 0 0 5.5 9.25V13H4.25A2.25 2.25 0 0 1 2 10.75v-6.5z"></path><path d="M9.25 7A2.25 2.25 0 0 0 7 9.25v6.5A2.25 2.25 0 0 0 9.25 18h6.5A2.25 2.25 0 0 0 18 15.75v-6.5A2.25 2.25 0 0 0 15.75 7h-6.5z"></path></svg>
                                    <span>Copy Address</span>
                                </button>
                            </div>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ReceiveTokensModal;