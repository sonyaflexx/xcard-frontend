import axios, { AxiosError } from 'axios';

interface Token {
  access_token: string;
}

//
export const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const saveTokens = (tokens: Token): void => {
//   localStorage.setItem('access_token', tokens.access_token);
//   console.log(123)
//   const expires = new Date();
//   expires.setDate(expires.getDate() + 7);

//   document.cookie = `access_token=${tokens.access_token}; expires=${expires.toUTCString()}; path=/`;
// };

// const getTokens = (): Token => {
//   const access_token = localStorage.getItem('access_token') || '';

//   return { access_token };
// };

// export const login = async (credentials: { email: string; password: string }): Promise<void | boolean> => {
//   try {
//     const response = await instance.post<Token>('/login', credentials);
//     const tokens = response.data;
//     saveTokens(tokens);
//     return true;
//   } catch (error) {
//     console.error('Authentication error:', (error as AxiosError).message);
//     throw error;
//   }
// };

// export const register = async (credentials: { email: string; password: string }): Promise<void | boolean> => {
//   try {
//     const response = await instance.post<Token>('/register', credentials);
//     const tokens = response.data;
//     console.log(tokens)
//     saveTokens(tokens);
//     return true
//   } catch (error) {
//     console.error('Authentication error:', (error as AxiosError).message);
//     throw error;
//   }
// };

// export const verificateCode = async (credentials: { email: string; confirmation_code: number }): Promise<void | boolean> => {
//   try {
//     const response = await instance.post<Token>('/confirm-email', credentials);
//     //const tokens = response.data;
//     //console.log(tokens)
//     //saveTokens(tokens);
//     return true
//   } catch (error) {
//     console.error('Authentication error:', (error as AxiosError).message);
//     throw error;
//   }
// };


// export const logout = (): void => {
//   localStorage.removeItem('access_token');
//   document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// };

// export const setAuthToken = (): void => {
//   const { access_token } = getTokens();
//   if (access_token) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
//   } else {
//     delete instance.defaults.headers.common['Authorization'];
//   }
// };