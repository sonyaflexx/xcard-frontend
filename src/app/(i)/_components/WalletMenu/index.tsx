'use client'

import GrayButton from "@/components/ui/inputs/buttons/GrayButton"
import ActionButton from "./ActionButton"
import WalletTabs from "./WalletTabs"
import { Wallet } from "@/types"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"
import { truncateString } from "@/utils/TruncateString"
import {useDisclosure} from "@nextui-org/react";
import SendTokensModal from "@/components/ui/modals/actions/SendTokensModal"
import ReceiveTokensModal from "@/components/ui/modals/actions/ReceiveTokensModal"
import { useState } from "react"
import TokenDetailsModal from "@/components/ui/modals/actions/TokenDetailsModal"
import { showNotification } from "@/store/reducers/notificationsSlice"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import BuyCryptoModal from "@/components/ui/modals/BuyCryptoModal"
import SellCryptoModal from "@/components/ui/modals/SellCryptoModal"

export default function WalletMenu() {
    const { isOpen: isSendOpen, onOpen: openSend, onOpenChange: onSendOpenChange, onClose: closeSend } = useDisclosure();
    const { isOpen: isReceiveOpen, onOpen: openReceive, onOpenChange: onReceiveOpenChange, onClose: closeReceive } = useDisclosure();
    const { isOpen: isTokenDetailsOpen, onOpen: openTokenDetails, onOpenChange: onTokenDetailsOpenChange, onClose: closeTokenDetails } = useDisclosure();
    const { isOpen: isBuyCryptoOpen, onOpen: openBuyCrypto, onOpenChange: onBuyCryptoOpenChange, onClose: closeBuyCrypto } = useDisclosure();
    const { isOpen: isSellCryptoOpen, onOpen: openSellCrypto, onOpenChange: onSellCryptoOpenChange, onClose: closeSellCrypto } = useDisclosure();
    const dispatch = useAppDispatch();
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);
    
    const [selectedToken, setSelectedToken] = useState(null);

    const handleSendSelectToken = (token: any) => {
        setSelectedToken(token);
        closeSend();
        openTokenDetails();
    };

    const handleSendBack = () => {
        closeTokenDetails();
        openSend();
    };

    const handleCopy = () => {
        dispatch(showNotification({ message: 'Address copied.', duration: 3000 }));
        activeWallet && activeWallet.address && navigator.clipboard.writeText(activeWallet.address);
    }
    
    return (
        <div className="max-w-5xl w-full px-4 md:px-8 mt-3 md:mt-5 flex flex-col gap-8">
            <div className="flex max-md:flex-col max-md:gap-8 justify-between"> {/* TODO header */}
                <div className="flex flex-col gap-1"> {/* TODO Часть с деньгами слева */}
                    <div className="text-gray-300 flex -ml-2 font-medium"> {/* TODO Действия */}
                        <button onClick={handleCopy} className="text-xs flex dark:hover:bg-gray-400 hover:bg-gray-50 bg-opacity-60 py-1 px-2 rounded-full gap-2">
                            <span>{truncateString(activeWallet?.address, 4, 4)}</span>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="16" height="16" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"></path></svg>
                        </button>
                        <a href="" className="p-1 dark:hover:bg-gray-400 hover:bg-gray-50 bg-opacity-60 rounded-full">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="16" height="16" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path></svg>
                        </a>
                    </div>
                    <div className="flex gap-1 items-center"> {/* TODO Кол-во денег */}
                        <span className="f text-3xl font-semibold">$0.00</span>
                        <GrayButton>
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" clipRule="evenodd"></path></svg>
                        </GrayButton>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-300"> {/* TODO Метрика */}
                        <div className="flex gap-0.5 text-green-money font-medium">
                            <span>+</span>
                            <span>$0.00</span>
                        </div>
                        <span className="font-medium">Today</span>
                        <span className="font-bold">•</span>
                        <span>Updated just now</span>
                    </div>
                </div> 
                <div className="flex items-center"> {/* TODO Действия */}
                    <ul className="flex items-center gap-10 max-md:justify-around w-full">
                        <li>
                            <ActionButton className="max-md:p-3" label={'Send'} onClick={openSend}>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24"  role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5"></path></svg>
                            </ActionButton>
                        </li>
                        <li>
                            <ActionButton className="max-md:p-3" label={'Receive'} onClick={openReceive}>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zm0 9.75h.75v.75h-.75v-.75zm9.75-9.75h.75v.75h-.75v-.75zm-3 6.75h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm6-6h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm-3-3h.75v.75h-.75v-.75z"></path></svg>
                            </ActionButton>
                        </li>
                        {/* <li>
                            <ActionButton className="max-md:p-3" label={'Swap'} >
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24"  role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path></svg>
                            </ActionButton>
                        </li> */}
                        <li>
                            <Dropdown className="dark:bg-gray-475">
                                    <DropdownTrigger className="outline-none" aria-label="More">
                                        <button className="flex flex-col gap-2 justify-center items-center">
                                            <div className="max-md:p-3 p-2 dark:bg-gray-475 bg-gray-50 hover:bg-gray-20 hover:bg-opacity-50 rounded-full dark:hover:bg-gray-420 dark:border-gray-400 text-gray-350 dark:text-gray-20" style={{borderWidth: '1px'}}>
                                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24"  role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"></path></svg>
                                            </div>
                                            <span className="text-xs font-medium">More</span>
                                        </button>
                                    </DropdownTrigger>
                                    <DropdownMenu variant="flat">
                                        <DropdownItem key="buy" className="hover:border-none dark:text-white hover:dark:text-white dark:hover:bg-gray-400 focus:outline-none" aria-label="Buy Crypto">
                                            <div onClick={openBuyCrypto} className="flex justify-between items-center outline-none">
                                                <span>Buy Crypto</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"></path></svg>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem key="sell" className="dark:hover:bg-gray-400" aria-label="Sell Crypto">
                                            <div onClick={openSellCrypto} className="flex justify-between items-center outline-none">
                                                <span>Sell Crypto</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM1.75 14.5a.75.75 0 0 0 0 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 0 0-1.5 0v.784a.272.272 0 0 1-.35.25A49.043 49.043 0 0 0 1.75 14.5z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem key="explorer" className="dark:hover:bg-gray-400" aria-label="View in explorer">
                                            <div className="flex justify-between items-center outline-none">
                                                <span>View in explorer</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662zm-3.229 2.413a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758zM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81 8.577 8.577 0 0 0 1.84 1.66zm12.049-.276a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896zm-14.668 0a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23zm4.357-.643a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305zm-7.409 3.04a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04z"></path></svg>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem key="copy" className="dark:hover:bg-gray-400" aria-label="Copy Address">
                                            <div onClick={handleCopy} className="flex justify-between items-center outline-none">
                                                <span>Copy Address</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path d="M2 4.25A2.25 2.25 0 0 1 4.25 2h6.5A2.25 2.25 0 0 1 13 4.25V5.5H9.25A3.75 3.75 0 0 0 5.5 9.25V13H4.25A2.25 2.25 0 0 1 2 10.75v-6.5z"></path><path d="M9.25 7A2.25 2.25 0 0 0 7 9.25v6.5A2.25 2.25 0 0 0 9.25 18h6.5A2.25 2.25 0 0 0 18 15.75v-6.5A2.25 2.25 0 0 0 15.75 7h-6.5z"></path></svg>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem key="nostr" className="dark:hover:bg-gray-400" aria-label="Nostr">
                                            <div className="flex justify-between items-center outline-none">
                                                <span>Nostr</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" role="img"><path fillRule="evenodd" d="M19.5856 8.96734V18.6212C19.5856 18.9842 19.291 19.2788 18.928 19.2788H11.036C10.673 19.2788 10.3784 18.9842 10.3784 18.6212V16.8233C10.4143 14.6195 10.6475 12.5085 11.1369 11.5481C11.4304 10.9705 11.9141 10.6562 12.4697 10.488C13.5194 10.1725 15.3613 10.3882 16.143 10.3511C16.143 10.3511 18.5046 10.4451 18.5046 9.10769C18.5046 8.03131 17.4491 8.11598 17.4491 8.11598C16.2857 8.14613 15.3996 8.06726 14.8254 7.84108C13.8638 7.46295 13.8314 6.76934 13.8279 6.53736C13.7803 3.85799 9.82972 3.5367 6.34887 4.20132C2.54324 4.9251 6.39062 10.3801 6.39062 17.6619V18.6339C6.38367 18.9912 6.09485 19.28 5.73528 19.28H1.82758C1.46454 19.28 1.16992 18.9854 1.16992 18.6223V1.9256C1.16992 1.56255 1.46454 1.26794 1.82758 1.26794H5.50098C5.86403 1.26794 6.15864 1.56255 6.15864 1.9256C6.15864 2.46495 6.76527 2.76537 7.20371 2.45103C8.52484 1.50456 10.2206 1 12.1182 1C16.3692 1 19.5833 3.47754 19.5833 8.96734H19.5856ZM12.5288 7.00827C12.5288 6.23114 11.899 5.60132 11.1218 5.60132C10.3447 5.60132 9.71489 6.23114 9.71489 7.00827C9.71489 7.78541 10.3447 8.41523 11.1218 8.41523C11.899 8.41523 12.5288 7.78541 12.5288 7.00827Z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        </li>
                    </ul>
                    <SendTokensModal isOpen={isSendOpen} onClose={closeSend} onOpenChange={onSendOpenChange} onSelectToken={handleSendSelectToken} />
                    {selectedToken && (
                        <TokenDetailsModal isOpen={isTokenDetailsOpen} onClose={closeTokenDetails} token={selectedToken} onBack={handleSendBack} />
                    )}
                    <ReceiveTokensModal isOpen={isReceiveOpen} onClose={closeReceive} onOpenChange={onReceiveOpenChange} />
                    <BuyCryptoModal isOpen={isBuyCryptoOpen} onClose={closeBuyCrypto} onOpenChange={onBuyCryptoOpenChange} />
                    <SellCryptoModal isOpen={isSellCryptoOpen} onClose={closeSellCrypto} onOpenChange={onSellCryptoOpenChange} />
                </div>
            </div>
            <WalletTabs />
        </div>
    )
}