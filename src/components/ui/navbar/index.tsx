'use client';

import Link from "next/link";
import NavList from "./navList";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { RootState } from "@/store/store";
import GrayButton from "../inputs/buttons/GrayButton";
import ActionButton from "@/app/(i)/_components/WalletMenu/ActionButton";
import { useState, useRef, useEffect } from "react";
import { switchActiveWallet } from "@/store/reducers/accountSlice";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import EditWalletModal from "../modals/EditWalletModal";
import CreateWalletModal from "../modals/CreateWalletModal";

export default function Navbar({ activePage }: { activePage: string }) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
    const dispatch = useAppDispatch();
    const account = useAppSelector((state: RootState) => state.account)
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);

    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [isOpenStates, setIsOpenStates] = useState<{ [key: string]: boolean }>({});

    const handleOpenChange = (walletId: number, isOpen: boolean) => {
        setIsOpenStates(prevState => ({
            ...prevState,
            [walletId]: isOpen
        }));
    };

    return (
        <nav className="max-md:bottom-0 max-md:fixed max-md:h-12 max-md:w-full flex flex-col text-sm h-screen bg-gray-50 dark:bg-gray-600 max-md:border-t dark:border-gray-400 md:dark:bg-gray-500 w-64 md:pt-3 md:px-4 md:pb-5 tracking-tight sticky md:top-0">
            <div className="flex max-md:items-center max-md:justify-center md:flex-col gap-3 h-full">
                {wallets && wallets.length > 0 ? (
                    <div className="max-md:hidden relative flex">
                        <GrayButton className={`rounded-xl pt-1 pb-1 pl-1 pr-2 w-full ${isDropdownVisible && 'dark:bg-gray-350 bg-gray-20 pointer-events-none'}`} onClick={toggleDropdown}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="text-xl size-8 rounded-xl flex justify-center items-center"
                                        style={{ backgroundColor: activeWallet?.avatarBgColor }}
                                    >
                                        {activeWallet?.avatar}
                                    </div>
                                    <span className="dark:text-white font-medium">{activeWallet?.name}</span>
                                </div>
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                    color="#8C8CA1"
                                    role="img"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3zm-3.76 9.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </GrayButton>
                        <div
                            ref={dropdownRef}
                            className={`${
                                isDropdownVisible ? 'block' : 'pointer-events-none'
                            } flex flex-col absolute top-full w-80 h-[500px] mt-3 dark:bg-gray-600 bg-white border dark:border-gray-400 rounded-xl shadow-lg z-50 transition-all transform ${
                                isDropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                            }`}
                        >
                            <div className="flex justify-between items-center px-4 py-4">
                                <span className="text-lg font-medium leading-none -mt-1">Wallets</span>
                                <ActionButton type='button' onClick={onOpenCreate}>
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"></path></svg>
                                </ActionButton>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-4">
                                    <span className="text-xs font-medium text-gray-300">APP WALLET</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col overflow-y-auto max-h-[390px]">
                                        {wallets.map(wallet => (
                                            <li key={wallet.address} className="flex gap-1 pr-[9px] items-center">
                                                <div className={`w-[3px] h-9 rounded-r-full ${wallet.id === activeWalletId && 'bg bg-green-50'}`}></div>
                                                <GrayButton className="rounded-xl p-2 w-full" onClick={() => {
                                                    dispatch(switchActiveWallet(wallet.id));
                                                    setIsDropdownVisible(false);
                                                }}>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="text-xl size-8 rounded-xl flex justify-center items-center"
                                                                style={{ backgroundColor: wallet.avatarBgColor }}
                                                            >
                                                                {wallet.avatar}
                                                            </div>
                                                            <span className="dark:text-white font-medium">{wallet.name}</span>
                                                        </div>
                                                    </div>
                                                </GrayButton>
                                                <Dropdown className="dark:bg-gray-475">
                                                    <DropdownTrigger>
                                                        <div className="dark:text-gray-300 text-gray-400 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-420 absolute z-50 right-[17px] cursor-pointer">
                                                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm1.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
                                                        </div>
                                                    </DropdownTrigger>
                                                    <DropdownMenu variant="flat">
                                                        <DropdownItem onClick={() => handleOpenChange(wallet.id, true)} key="edit" className="hover:border-none dark:text-white hover:dark:text-white dark:hover:bg-gray-400 focus:outline-none">
                                                            <div className="flex justify-between items-center">
                                                                <span>Edit</span>
                                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="m2.695 14.763-1.262 3.154a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.885L17.5 5.5a2.121 2.121 0 0 0-3-3L3.58 13.42a4 4 0 0 0-.885 1.343z"></path></svg>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem key="delete" className="dark:hover:bg-gray-400">
                                                            <div className="flex justify-between items-center text-red-soft focus:outline-none">
                                                                <span>Remove Wallet</span>
                                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" color="#E5484D" role="img"><path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443a40.83 40.83 0 0 0-2.365.298.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                <EditWalletModal
                                                    isOpen={isOpenStates[wallet.id] || false}
                                                    onOpenChange={(isOpen: boolean) => handleOpenChange(wallet.id, isOpen)}
                                                    walletInfo={wallet}
                                                    onClose={() => handleOpenChange(wallet.id, false)}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    account && account.status.fetchAccountData === 'succeeded' ? (
                        <button
                            onClick={onOpenCreate}
                            className="max-md:hidden truncate flex w-fit px-4 py-2 items-center justify-center border-2 dark:bg-gray-475 border-gray-200 dark:border-gray-400 rounded-xl"
                        >
                            Create Wallet
                        </button>
                    ) : (
                        <Link
                            href={'/auth'} 
                            className="max-md:hidden truncate flex w-fit px-4 py-2 items-center justify-center border-2 dark:bg-gray-475 border-gray-200 dark:border-gray-400 rounded-xl"
                        >
                            Create Wallet
                        </Link>
                    )
                )}
                <NavList activePage={activePage} />
                <CreateWalletModal isOpen={isOpenCreate} onClose={onCloseCreate} />
            </div>
        </nav>
    );
}