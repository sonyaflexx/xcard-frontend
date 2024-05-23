type Transaction = {
    title: string;
    date: string;
    amount: string;
  };
  
type TableProps = {
    transactions?: Transaction[];
};

const TransactionsTable: React.FC<TableProps> = ({ transactions }) => {
return (
<div className="container mx-auto flex-1">
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-400 max-h-[450px]">
        <table className="min-w-full">
            <thead className="sticky top-0 bg-gray-200 dark:bg-gray-500">
                <tr className="sticky top-0 text-gray-300 font-semibold text-xs">
                    <th className="pl-6 uppercase font-medium text-sm text-left w-[34%] pt-16 pb-3">Title</th>
                    <th className="px-6 uppercase font-medium text-sm w-[33%] pt-16 pb-3 text-right">Date</th>
                    <th className="px-6 uppercase font-medium text-sm w-[33%] pt-16 pb-3 text-right">Amount</th>
                </tr>
            </thead>
            <tbody className="h-full overflow-y-auto">
                {!transactions || transactions.length === 0 ? (
                    <tr>
                        <td colSpan={3} className="text-center py-4">No transactions.</td>
                    </tr>
                ) : (
                    transactions.map((transaction, index) => (
                        <tr key={index} className="px-6 py-4 text-sm font-medium dark:bg-gray-475 border-t-[1px] border-x-[1px] last:border-[1px] dark:border-gray-350 dark:hover:bg-gray-420 dark:active:bg-gray-400 cursor-pointer">
                            <td className="py-3 pl-6">{transaction.title}</td>
                            <td className="py-3 px-6 text-right">{transaction.date}</td>
                            <td className="py-3 px-6 text-right">{transaction.amount}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
</div>


);
};

export default TransactionsTable;