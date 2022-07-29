import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import loginSlice from './loginSlice';
//create store
export const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
  },
});
