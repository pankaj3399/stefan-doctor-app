import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  roles: string[];
}

interface LoginPayload {
  email: string;
  password: string;
}

interface PasswordResetPayload {
  email: string;
}

interface ResetPasswordPayload {
  email: string;
  password: string;
  otp: string;
}

interface AuthState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  success: false,
};

// Register User
export const registerUser = createAsyncThunk<
  any,
  RegisterPayload,
  { rejectValue: string }
>('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://stefan-doctor-server.vercel.app/v1/auth/register',
      userData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Registration failed'
    );
  }
});

// Login User
export const loginUser = createAsyncThunk<
  any,
  LoginPayload,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://stefan-doctor-server.vercel.app/v1/auth/login',
      credentials
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Trigger Password Reset
export const triggerPasswordReset = createAsyncThunk<
  any,
  PasswordResetPayload,
  { rejectValue: string }
>('auth/triggerPasswordReset', async (emailData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://stefan-doctor-server.vercel.app/v1/auth/triggerPasswordReset',
      emailData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Password reset failed'
    );
  }
});

// Reset Password
export const resetPassword = createAsyncThunk<
  any,
  ResetPasswordPayload,
  { rejectValue: string }
>('auth/resetPassword', async (resetData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      'https://stefan-doctor-server.vercel.app/v1/auth/resetPassword',
      resetData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Password reset failed'
    );
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Trigger Password Reset
      .addCase(triggerPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(triggerPasswordReset.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(triggerPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
