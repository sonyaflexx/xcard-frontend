import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { useCookie } from 'next-cookie';
import axios from 'axios';
import { instance } from '@/api/auth';

interface AuthState {
  email: string | null;
  token: string | null;
  loginStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  registerStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  verifyEmailStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  resetPasswordStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  confirmResetPasswordStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  loginError: string | null;
  registerError: string | null;
  verifyEmailError: string | null;
  resetPasswordError: string | null;
  confirmResetPasswordError: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
  loginStatus: 'idle',
  registerStatus: 'idle',
  verifyEmailStatus: 'idle',
  resetPasswordStatus: 'idle',
  confirmResetPasswordStatus: 'idle',
  loginError: null,
  registerError: null,
  verifyEmailError: null,
  resetPasswordError: null,
  confirmResetPasswordError: null,
};

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
}

interface VerifyEmailPayload {
  email: string;
  verificationCode: string;
}

interface ResetPasswordPayload {
  email: string;
}

interface ConfirmResetPasswordPayload {
  email: string;
  password: string;
  confirmationCode: string;
}

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginPayload) => {
  const response = await instance.post('/login', { email, password });
  return response.data;
});

export const register = createAsyncThunk('auth/register', async ({ email, password }: RegisterPayload) => {
  const response = await instance.post('/register', { email, password });
  return response.data;
});

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async ({ email, verificationCode }: VerifyEmailPayload) => {
  const response = await axios.post('/confirm-email', { email, confirmation_code: verificationCode });
  return response.data;
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async ({ email }: ResetPasswordPayload) => {
  const response = await axios.post('/send-confirmation-code', { email });
  return response.data;
});

export const confirmResetPassword = createAsyncThunk('auth/confirmResetPassword', async ({ email, password, confirmationCode }: ConfirmResetPasswordPayload) => {
  const response = await axios.post('/reset-password-confirm', { email, password, confirmation_code: confirmationCode });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.token = null;

      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginStatus = 'loading';
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ email: string; access_token: string; refresh_token: string }>) => {
        state.loginStatus = 'succeeded';
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        localStorage.setItem('access_token', action.payload.access_token)

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        document.cookie = `access_token=${action.payload.access_token}; expires=${expires.toUTCString()}; path=/`;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = 'failed';
        state.loginError = 'Wrong data!';
      })
      .addCase(register.pending, (state) => {
        state.registerStatus = 'loading';
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{ email: string; access_token: string; refresh_token: string }>) => {
        state.registerStatus = 'succeeded';
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        
        localStorage.setItem('access_token', action.payload.access_token)

        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        document.cookie = `access_token=${action.payload.access_token}; expires=${expires.toUTCString()}; path=/`;
      })
      .addCase(register.rejected, (state, action) => {
        state.registerStatus = 'failed';
        state.registerError = 'This email is busy or uncorrect.';
      })
      .addCase(verifyEmail.pending, (state) => {
        state.verifyEmailStatus = 'loading';
        state.verifyEmailError = null;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.verifyEmailStatus = 'succeeded';
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.verifyEmailStatus = 'failed';
        state.verifyEmailError = action.error.message || 'Email verification failed';
      })
      .addCase(resetPassword.pending, (state) => {
        state.resetPasswordStatus = 'loading';
        state.resetPasswordError = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.resetPasswordStatus = 'succeeded';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPasswordStatus = 'failed';
        state.resetPasswordError = action.error.message || 'Password reset failed';
      })
      .addCase(confirmResetPassword.pending, (state) => {
        state.confirmResetPasswordStatus = 'loading';
        state.confirmResetPasswordError = null;
      })
      .addCase(confirmResetPassword.fulfilled, (state) => {
        state.confirmResetPasswordStatus = 'succeeded';
      })
      .addCase(confirmResetPassword.rejected, (state, action) => {        
      state.confirmResetPasswordStatus = 'failed';
      state.confirmResetPasswordError = action.error.message || 'Password reset confirmation failed';
    });
},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
