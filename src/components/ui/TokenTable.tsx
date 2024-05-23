'use client'

import { useAppSelector } from "@/store/hooks";
import MoneyChange from "./MoneyChange";
import { RootState } from "@/store/store";
import { Token } from "@/types";

function TokenTable({ tokens }: { tokens: Token[] }) {
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);

    return (
            <div className="container mx-auto flex-1">
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-400 max-h-[450px]">
                    <table className="min-w-full text-xs">
                        <thead className="sticky top-0 bg-gray-200 dark:bg-gray-500">
                            <div className="absolute flex items-center gap-2 font-semibold text-lg top-5 left-6">
                                <div className="p-2 rounded-full bg-green-40">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16" color="#FFFFFF" role="img"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                </div>
                                <span>Tokens</span>
                                <span>•</span>
                                <span>$0.00</span>
                            </div>
                            <tr className="sticky top-0 text-gray-300 font-semibold text-xs">
                                <th className="pl-6 uppercase font-medium text-sm text-left w-[34%] pt-16 pb-3">ASSETS</th>
                                <th className="px-4 uppercase font-medium text-sm w-[33%] pt-16 pb-3 text-right">PRICE</th>
                                <th className="px-6 uppercase font-medium text-sm w-[33%] pt-16 pb-3 text-right">VALUE</th>
                            </tr>
                        </thead>
                        <tbody className="h-full overflow-y-auto">
                            {!tokens || tokens.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="text-center py-4">No tokens.</td>
                                </tr>
                            ) : (
                                tokens.map((token, index) => (
                                    <tr key={index} className="px-6 py-4 dark:bg-gray-475 border-t-[1px] border-x-[1px] last:border-[1px] dark:border-gray-350 dark:hover:bg-gray-420 dark:active:bg-gray-400 cursor-pointer">
                                        <td className="py-3 pl-6">
                                            <div className="flex items-center gap-3">
                                                <img src={token.logo} width={32} height={32} className="size-8" />
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">{token.name}</span>
                                                    <span className="text-sm text-gray-300">{activeWallet?.tokens ? '...' : '0'} {token.symbol}</span> {/* TODO: Количество токенов на кошельке */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 font-semibold text-right">$500.00</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1 items-end text-right">
                                                <span className="text-sm font-medium">$0.00</span>
                                                <MoneyChange amount={token.change} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    );
}

export default TokenTable;