'use client'

import { useAppSelector } from "@/store/hooks";
import EmptyWalletNotification from "../_components/EmptyWalletNotification";
import EmptyCardsNotification from "./EmptyCardsNotification";
import formatMoney from "@/utils/FormatMoney";
import { truncateString } from "@/utils/TruncateString";
import ActionButton from "../_components/WalletMenu/ActionButton";
import TransactionsTable from "../_components/TransactionsTable";
import PeriodSelector from "../_components/PeriodSelector";

const transactions = [
    { title: 'Transaction 1', date: '2023-05-01', amount: '$123.45' },
    { title: 'Transaction 2', date: '2023-05-02', amount: '$234.56' },
    { title: 'Transaction 3', date: '2023-05-03', amount: '$345.67' },
    { title: 'Transaction 4', date: '2023-05-04', amount: '$456.78' },
    { title: 'Transaction 5', date: '2023-05-05', amount: '$567.89' },
    { title: 'Transaction 6', date: '2023-05-06', amount: '$678.90' },
    { title: 'Transaction 7', date: '2023-05-07', amount: '$789.01' },
    { title: 'Transaction 8', date: '2023-05-08', amount: '$890.12' },
    { title: 'Transaction 9', date: '2023-05-09', amount: '$901.23' },
    { title: 'Transaction 10', date: '2023-05-10', amount: '$1,012.34' },
    { title: 'Transaction 11', date: '2023-05-11', amount: '$1,123.45' },
    { title: 'Transaction 12', date: '2023-05-12', amount: '$1,234.56' },
    { title: 'Transaction 13', date: '2023-05-13', amount: '$1,345.67' },
    { title: 'Transaction 14', date: '2023-05-14', amount: '$1,456.78' },
    { title: 'Transaction 15', date: '2023-05-15', amount: '$1,567.89' },
    { title: 'Transaction 16', date: '2023-05-16', amount: '$1,678.90' },
    { title: 'Transaction 17', date: '2023-05-17', amount: '$1,789.01' },
    { title: 'Transaction 18', date: '2023-05-18', amount: '$1,890.12' },
    { title: 'Transaction 19', date: '2023-05-19', amount: '$1,901.23' },
    { title: 'Transaction 20', date: '2023-05-20', amount: '$2,012.34' },
    { title: 'Transaction 21', date: '2023-05-21', amount: '$2,123.45' },
    { title: 'Transaction 22', date: '2023-05-22', amount: '$2,234.56' },
    { title: 'Transaction 23', date: '2023-05-23', amount: '$2,345.67' },
    { title: 'Transaction 24', date: '2023-05-24', amount: '$2,456.78' },
    { title: 'Transaction 25', date: '2023-05-25', amount: '$2,567.89' },
    { title: 'Transaction 26', date: '2023-05-26', amount: '$2,678.90' },
    { title: 'Transaction 27', date: '2023-05-27', amount: '$2,789.01' },
    { title: 'Transaction 28', date: '2023-05-28', amount: '$2,890.12' },
    { title: 'Transaction 29', date: '2023-05-29', amount: '$2,901.23' },
    { title: 'Transaction 30', date: '2023-05-30', amount: '$3,012.34' }
  ];

export default function Card() {
    const card = useAppSelector((state) => state.account.card)
    const activeWalletId = useAppSelector((state) => state.account.activeWalletId);

    if (!activeWalletId) {
        return <EmptyWalletNotification />;
    }

    if (!card) {
        return <EmptyCardsNotification />;
    }

    return (
        <div>
            <div key={card.id} className="pt-10 flex flex-col gap-14 h-full">
                <div className="flex gap-16">
                    <div className="flex flex-col gap-3">
                        <div className="bg-[url('/card.png')] bg-no-repeat w-[388px] h-[214px] relative text-white">
                            <span className="absolute font-medium text-2xl top-[90px] left-7">{formatMoney(card.balance)}</span>
                            <span className="absolute text-lg font-medium right-7 bottom-5">{truncateString(card.id.toString(), 0, 4, '**** ')}</span>
                        </div>
                        <div className="flex justify-between pl-2">
                            <div className="flex gap-5">
                                <ActionButton label="Transfer">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5"></path></svg>
                                </ActionButton>
                                <ActionButton label="Receive">
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zm0 9.75h.75v.75h-.75v-.75zm9.75-9.75h.75v.75h-.75v-.75zm-3 6.75h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm6-6h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm-3-3h.75v.75h-.75v-.75z"></path></svg>
                                </ActionButton>
                            </div>
                            <div>
                                <ActionButton>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="24" height="24" role="img"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"></path></svg>
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1px] h-auto bg-gray-200 dark:bg-gray-400"></div>
                    <div className="w-96 flex flex-col justify-between py-2">
                        <div className="flex justify-between">
                            <h2 className="font-medium text-lg">Balance</h2>
                            <PeriodSelector />
                        </div>
                        <div className="flex flex-col text-gray-300 -mt-8 gap-3">
                            <span className="text-4xl font-bold">{formatMoney(card.balance)}</span>
                            <span className="">{truncateString(card.id.toString(), 0, 4, '**** **** **** ')}</span>
                        </div>
                        <div className="flex gap-28">
                            <div className="flex flex-col gap-3">
                                <h3 className="font-medium text-gray-200 dark:text-gray-300">Income</h3>
                                <div className="flex gap-2 items-center">
                                    <div className="dark:bg-gray-420 bg-gray-50 rounded-full border-[1px] dark:border-gray-400">
                                        <div className="bg-[url('/ArrowTop.svg')] h-8 w-8 bg-no-repeat bg-center"></div>
                                    </div>
                                    <span className="font-medium">+ {formatMoney(123.5)}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="font-medium text-gray-200 dark:text-gray-300">Expense</h3>
                                <div className="flex gap-2 items-center">
                                    <div className="dark:bg-gray-420 bg-gray-50 rounded-full border-[1px] dark:border-gray-400">
                                        <div className="bg-[url('/ArrowDown.svg')] h-8 w-8 bg-no-repeat bg-center"></div>
                                    </div>
                                    <span className="font-medium">- {formatMoney(13.5)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1 pb-5">
                    <h2>History of transactions</h2>
                    <TransactionsTable transactions={transactions} />
                </div>
            </div>
        </div>
    );
}