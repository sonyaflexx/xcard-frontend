import axios, { AxiosError } from 'axios';

interface Token {
  access_token: string;
}

//
export const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/api',
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

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(
          `${process.env.API_URL || 'http://localhost:8000'}/api/auth/refresh`,
          {},
          { withCredentials: true },
        );
        localStorage.setItem("access_token", response.data.accessToken);
        return instance(originalRequest);
      } catch (e) {
        localStorage.removeItem("access_token");
        console.error(`User unauthorized: ${e}`);
      }
    }
    return Promise.reject(error);
  },
);