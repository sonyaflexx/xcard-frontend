import { instance } from '@/api/auth';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  email: string | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
  status: 'idle',
  error: null,
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

export const login = createAsyncThunk('/login', async ({ email, password }: LoginPayload) => {
  const response = await instance.post('/login', { email, password });
  return response.data;
});

export const register = createAsyncThunk('auth/register', async ({ email, password }: RegisterPayload) => {
  const response = await axios.post('/register', { email, password });
  return response.data;
});

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async ({ email, verificationCode }: VerifyEmailPayload) => {
  const response = await axios.post('/confirm-email', { email, confirmation_code: verificationCode });
  return response.data;
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async ({ email }: ResetPasswordPayload) => {
  const response = await axios.post('/api/send-confirmation-code', { email });
  return response.data;
});

export const confirmResetPassword = createAsyncThunk('auth/confirmResetPassword', async ({ email, password, confirmationCode }: ConfirmResetPasswordPayload) => {
  const response = await axios.post('/api/reset-password-confirm', { email, password, confirmation_code: confirmationCode });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.token = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ email: string; access_token: string; refresh_token: string }>) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        localStorage.setItem('access_token', action.payload.access_token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Login failed';
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{ email: string; access_token: string; refresh_token: string }>) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.token = action.payload.access_token;
        localStorage.setItem('access_token', action.payload.access_token);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Registration failed';
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Email verification failed';
      })
      .addCase(resetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Password reset failed';
      })
      .addCase(confirmResetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(confirmResetPassword.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(confirmResetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Password reset confirmation failed';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;