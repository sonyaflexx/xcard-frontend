interface Wallet {
    id: number;
    address: string;
    name: string;
    avatar: string; // Unicode emoji
    avatarBgColor: string;
    tokens?: Token[];
    transactions?: Transaction[];
}

interface Card {
    id: number;
    balance: number;
}

interface Token {
    id: number;
    name: string;
    logo: string;
    symbol: string;
    price: number;
    change: number;
}

interface Transaction {
    fromWalletId: number;
    toWalletId: number;
    amount: number;
    token: Token;
}

interface Account {
    id: number;
    wallets: Wallet[];
    card: Card;
}

interface AccountState {
    
    wallets: Wallet[];
    activeWalletId: number | null;
    card: { id: number; balance: number };
    status: {
      fetchAccountData: 'idle' | 'loading' | 'succeeded' | 'failed';
      fetchWallets: 'idle' | 'loading' | 'succeeded' | 'failed';
      createWallet: 'idle' | 'loading' | 'succeeded' | 'failed';
      updateWallet: 'idle' | 'loading' | 'succeeded' | 'failed';
    };
    error: {
      fetchAccountData: string | null;
      fetchWallets: string | null;
      createWallet: string | null;
      updateWallet: string | null;
    };
}

  interface UserFormData {
    username: string;
    email: string;
    phoneAreaCode: string;
    phoneNumber: string;
}

interface IndividualFormData {
    firstName: string;
    lastName: string;
    birthDate: string;
    profession: string;
}

interface DocumentFormData {
    type: string;
    front: string;
    number: string;
    country: string;
    expiryDate: string;
}

interface AddressFormData {
    country: string;
    city: string;
    postCode: string;
    details: string;
}

export interface CoinMarketCapData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    price_usd: string;
    price_btc: string;
    '24h_volume_usd': string;
    market_cap_usd: string;
    available_supply: string;
    total_supply: string;
    max_supply: string;
    percent_change_1h: string;
    percent_change_24h: string;
    percent_change_7d: string;
    last_updated: string;
    tags?: string[];
}

export interface MarketData {
    [category: string]: CoinMarketCapData[];
}

export type { Account, AccountState, Wallet, Transaction, Token, Card, UserFormData, AddressFormData, DocumentFormData, IndividualFormData }