import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'types/user';

type AuthState = {
  accessToken: string | null;
  connected: boolean;
  email: string | null;
  id: number | null;
};

const initialState: AuthState = {
  accessToken: null,
  connected: false,
  email: null,
  id: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthenticate: (state, action: PayloadAction<{ accessToken: string; user: UserType }>) => {
      state.accessToken = action.payload.accessToken;
      state.connected = true;
      state.email = action.payload.user.email;
      state.id = action.payload.user.id;
    },
    onLogout: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { onAuthenticate, onLogout } = authSlice.actions;

export default authSlice.reducer;
