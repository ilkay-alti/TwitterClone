import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
//create store
export const store = configureStore({
  reducer: {
    auth,
  },
});
