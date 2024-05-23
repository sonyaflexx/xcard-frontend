import { useAppSelector } from "@/store/hooks";
import MoneyChange from "./MoneyChange";
import { RootState } from "@/store/store";

export default function TokenItem({ token }) {
    const wallets = useAppSelector((state: RootState) => state.account.wallets);
    const activeWalletId = useAppSelector((state: RootState) => state.account.activeWalletId);
    const activeWallet = wallets.find(wallet => wallet.id === activeWalletId);

    return (
        <li key={token.id} className="flex px-6 py-4 dark:bg-gray-475  first:rounded-t-xl last:rounded-b-xl border-t-[1px] border-x-[1px] last:border-[1px] dark:border-gray-350 dark:hover:bg-gray-420 dark:active:bg-gray-400 cursor-pointer">
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
    )
}