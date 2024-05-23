export default function formatCurrency(amount: number): string {
    const fixedAmount = amount.toFixed(2);

    const [integerPart, decimalPart] = fixedAmount.split('.');
    
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    
    return `$${formattedIntegerPart}.${decimalPart}`;
}
