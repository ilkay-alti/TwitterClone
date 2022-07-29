import { createSlice } from '@reduxjs/toolkit';

//first start with an empty object
const initialState = {
  emailModal: false,
  googleModal: false,
  appleModal: false,
};
//create the slice

const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    stateChangeEmail: (state, action) => {
      state.emailModal == action.payload;
    },
    stateChangeGoogle: (state, action) => {
      state.googleModal == action.payload;
    },
    stateChangeApple: (state, action) => {
      state.appleModal == action.payload;
    },
  },
});

export const { stateChangeEmail, stateChangeGoogle, stateChangeApple } =
  loginSlice.actions;

export default loginSlice.reducer;
