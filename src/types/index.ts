export interface Quote {
    USD: {
        price: number;
        percent_change_24h: number;
        market_cap: number;
    };
}

export interface CoinMarketCapData {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    is_active: number;
    first_historical_data: string;
    last_historical_data: string;
    platform: null | {
        id: number;
        name: string;
        symbol: string;
        slug: string;
        token_address: string;
    };
    quote: Quote;
  }
  
export interface Wallet {
    id: number;
    address: string;
    name: string;
    avatar: string;
    avatarBgColor: string;
    tokens?: Token[];
    transactions?: Transaction[];
}
  
export interface Card {
    id: number;
    balance: number;
}
  
export interface Token {
    id: number;
    name: string;
    logo: string;
    symbol: string;
    price: number;
    change: number;
}

export interface Transaction {
    fromWalletId: number;
    toWalletId: number;
    amount: number;
    token: Token;
}
  
export interface Account {
    id: number;
    wallets: Wallet[];
    card: Card;
}

export interface AccountState {
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
  
export interface UserFormData {
    username: string;
    email: string;
    phoneAreaCode: string;
    phoneNumber: string;
}
  
export interface IndividualFormData {
    firstName: string;
    lastName: string;
    birthDate: string;
    profession: string;
}
  
export interface DocumentFormData {
    type: string;
    front: string;
    number: string;
    country: string;
    expiryDate: string;
}

export interface AddressFormData {
    country: string;
    city: string;
    postCode: string;
    details: string;
}