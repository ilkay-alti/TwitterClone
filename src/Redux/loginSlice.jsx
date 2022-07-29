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
    stateChangeEmail: (state) => {
      state.emailModal = !state.emailModal;
    },
  },
});

export const { stateChangeEmail, stateChangeGoogle, stateChangeApple } =
  loginSlice.actions;

export default loginSlice.reducer;
