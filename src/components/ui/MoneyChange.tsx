export default function MoneyChange({ amount }: { amount: number }) {
    return (
        <>
            { (amount >= 0) ? (
                <span className="font-medium text-xs py-1 px-2 rounded-md dark:bg-moneychange-dark-up-bg dark:text-moneychange-dark-up-text leading-none">+{amount}%</span>
            ) : (
                <span className="font-medium text-xs py-1 px-2 rounded-md dark:bg-moneychange-dark-down-bg dark:text-moneychange-dark-down-text leading-none">-{Math.abs(amount)}%</span>
            )}
        </>
    );
}