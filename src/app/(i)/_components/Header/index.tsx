'use client'

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import ActionButton from "@/app/(i)/_components/WalletMenu/ActionButton";
import { useState, useRef, useEffect } from "react";
import { switchActiveWallet } from "@/store/reducers/accountSlice";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import EditWalletModal from "@/components/ui/modals/EditWalletModal";
import GrayButton from "@/components/ui/inputs/buttons/GrayButton";
import NetworkButton from "./NetworkButton";
import { logout } from "@/store/reducers/authSlice";
import SearchTokenButton from "./SearchTokenButton";

export default function Header({ activePage }: { activePage: string }) {
    let title = '';

    
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    
    const dispatch = useAppDispatch();
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);
    const userEmail = useAppSelector((state: RootState) => state.auth.email)
    
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            const target = event.target as Node;
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
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

    const handleLogout = () => {
        dispatch(logout())
    }
    
    if (activePage === '/' || activePage === '/card' || activePage === '/menu') {
        activePage === '/' && (title = 'Wallet');
        activePage === '/card' && (title = 'Card');
        activePage === '/menu' && (title = 'Menu');

        return (
            <header className="z-30 h-16 max-md:px-4 md:px-8 flex items-center justify-between sticky top-0 dark:bg-gray-600 bg-white">
                <h1 className="max-md:hidden text-lg font-semibold">{ title } {userEmail}</h1>
                <div className="md:hidden">
                    {wallets && wallets.length > 0 ? (
                            <div className="relative flex">
                                <GrayButton className={`px-0 rounded-xl pt-1 pb-1 w-full ${isDropdownVisible && 'dark:bg-gray-350 bg-gray-20 pointer-events-none'}`} onClick={toggleDropdown}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="text-xl size-8 rounded-xl flex justify-center items-center"
                                                style={{ backgroundColor: activeWallet?.avatarBgColor }}
                                            >
                                                {activeWallet?.avatar}
                                            </div>
                                        </div>
                                    </div>
                                </GrayButton>
                                <div
                                    ref={dropdownRef}
                                    className={`${
                                        isDropdownVisible ? 'block' : 'pointer-events-none'
                                    }  flex flex-col max-md:h-screen absolute max-md:-top-6 max-md:-left-4 max-md:rounded-none w-80 h-[500px] mt-3 dark:bg-gray-600 bg-white border dark:border-gray-400 rounded-xl shadow-lg z-50 transition-all transform ${
                                        isDropdownVisible ? 'max-md:shadow-2xl max-md:translate-x-0 md:opacity-100 md:translate-y-0' : 'max-md:-translate-x-[500px] md:opacity-0 md:-translate-y-3'
                                    }`}
                                >
                                    <div className="flex justify-between items-center px-4 py-4">
                                        <span className="text-lg font-medium leading-none -mt-1">Wallets</span>
                                        <ActionButton type='link' href={'/auth'}>
                                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"></path></svg>
                                        </ActionButton>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center px-4">
                                            <span className="text-xs font-medium text-gray-300">APP WALLET</span>
                                        </div>
                                        <div>
                                            <ul className="flex flex-col overflow-y-auto max-h-[390px]">
                                                { wallets.map(wallet => (
                                                    <li key={wallet.id} className="flex gap-1 pr-[9px] items-center">
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
                                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"  role="img"><path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm1.5 7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path></svg>
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
                                                )) }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/auth"
                                    className="max-md:hidden truncate flex w-fit px-4 py-2 items-center justify-center border-2 dark:bg-gray-475 border-gray-200 dark:border-gray-400 rounded-xl"
                                >
                                    Create Wallet
                                </Link>
                                <Link href={'/auth'} className={`md:hidden dark:text-gray-300 text-gray-400 md:p-2 rounded-full md:hover:bg-gray-200 md:dark:hover:bg-gray-420`}>
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" role="img"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"></path></svg>
                                </Link>
                            </>
                        )}
                </div>
                <div className="flex md:gap-2 gap-1">
                    <NetworkButton />
                    <Dropdown className="dark:bg-gray-475">
                        <DropdownTrigger className="outline-none" aria-label="More">
                            <button type="button" className={`dark:text-gray-300 text-gray-400 md:p-2 rounded-full md:hover:bg-gray-200 md:dark:hover:bg-gray-420`}>
                                <svg className="dark:text-gray-100" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"></path></svg>
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu variant="flat">
                            <DropdownItem key="buy" className="hover:border-none dark:text-white hover:dark:text-white dark:hover:bg-gray-400 focus:outline-none" aria-label="Buy Crypto">
                                <div className="flex justify-between items-center outline-none">
                                    <span>Scan</span>
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 0 0-1.5h-2zm9.5 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 15.75 2h-2zM3.5 13.75a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 4.25 18h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 1-.75-.75v-2zm14.5 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 1-.75.75h-2a.75.75 0 0 0 0 1.5h2A2.25 2.25 0 0 0 18 15.75v-2zM7 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg>
                                </div>
                            </DropdownItem>
                            <DropdownItem key="sell" className="dark:hover:bg-gray-400" aria-label="Sell Crypto">
                                <div onClick={handleLogout} className="flex justify-between items-center outline-none">
                                    <span>Lock Now</span>
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1zm3 8V5.5a3 3 0 1 0-6 0V9h6z" clipRule="evenodd"></path></svg>
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </header>
        );
    } else if (activePage === '/market') {
        title = 'Market';
        return (
            <header className="z-30 h-16 max-md:px-4 md:px-8 flex items-center sticky top-0 dark:bg-gray-600 bg-white">
                <h1 className="max-md:hidden text-lg font-semibold">{ title } {userEmail}</h1>
                <div className="ml-4 mr-2 w-[1px] h-4 bg-gray-400" />
                <SearchTokenButton />
            </header>
        )
    }
}