import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {
    name: 'Super Admin',
    email: 'admin@gymsuper.io',
    role: 'Platform Owner',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      if (action.payload?.email) {
        state.user.email = action.payload.email;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
