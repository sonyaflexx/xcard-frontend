'use client';

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import MoneyChange from "../../MoneyChange";
import { useEffect, useState } from "react";
import { fetchNetworks, selectNetwork } from "@/store/reducers/networksSlice";
import { Token } from "@/types";

const SendTokensModal = ({ isOpen, onClose, onOpenChange, onSelectToken }: { isOpen: boolean, onClose: () => void, onOpenChange: () => void, onSelectToken: (token: Token) => void }) => {
    const dispatch = useAppDispatch();
    const networks = useAppSelector((state: RootState) => state.networks.items);
    const activeNetworkId = useAppSelector((state: RootState) => state.networks.activeNetworkId);
    const activeNetwork = networks.find(network => network.chainId === activeNetworkId);
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);

    const tokens = useAppSelector((state: RootState) => state.tokens.items);

    return (
        <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="sm:mx-0 sm:max-w-full max-md:rounded-none max-md:m-0 max-md:size-full dark:bg-gray-600 rounded-3xl md:max-h-[90vh] h-[560px] md:max-w-[420px]">
                <>
                    <ModalHeader className="flex justify-between items-center border-b-2 dark:border-gray-400">
                        <div>
                            <h1>Send</h1>
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
                    <ModalBody className="pt-7">
                        <div className="max-h-[407px] overflow-y-auto">
                           <ul>
                                { tokens.map(token => (
                                    <li key={token.id} onClick={() => onSelectToken(token)} className="flex px-6 py-4 dark:bg-gray-475  first:rounded-t-xl last:rounded-b-xl border-t-[1px] border-x-[1px] last:border-[1px] dark:border-gray-350 dark:hover:bg-gray-420 dark:active:bg-gray-400 cursor-pointer">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex w-full items-center gap-3">
                                                <img src={token.logo} width={32} height={32} className="size-8" />
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">{token.name}</span>
                                                    <span className="text-sm text-gray-300">{activeWallet?.tokens ? '...' : '0'} {token.symbol}</span> {/* TODO Количество токенов на кошельке */}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="text-sm font-medium">$0.00</span>
                                                <MoneyChange amount={token.change} />
                                            </div>
                                        </div>
                                    </li>
                                )) }
                           </ul>
                        </div>
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>
    );
};

export default SendTokensModal;
