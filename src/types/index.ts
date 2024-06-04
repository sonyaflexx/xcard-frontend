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

export interface Network {
    id: number;
    name: string;
    rpcUrl: string;
    chainId: number;
    symbol: string;
    explorerUrl: string;
}

export interface Wallet {
    id: number;
    userId: number;
    address: string;
    mnemonic: string;
    privateKey: string;
    avatar: string;
    avatarBgColor: string;
    name: string;
    settingsId: number;
    createdAt: string;
    updatedAt: string;
  }
  
export interface Settings {
    id: number;
    userId: number;
    selectedNetworkId: number | null;
    selectedWalletId: number;
    createdAt: string;
    updatedAt: string;
    selectedNetwork: Network | null;
    selectedWallet: Wallet;
}
  
export interface Account {
    id: number;
    wallets: Wallet[];
    email: string;
    confirmedEmail: boolean;
    settingsId: number;
    createdAt: string;
    updatedAt: string;
    settings: Settings;
}
  
export interface AccountState {
    wallets: Wallet[];
    activeWalletId: number;
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