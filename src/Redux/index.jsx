import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import login from './loginSlice';
//create store
export const store = configureStore({
  reducer: {
    auth,
    login,
  },
});
