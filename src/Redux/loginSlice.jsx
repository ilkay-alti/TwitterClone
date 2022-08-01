import { createSlice } from '@reduxjs/toolkit';

//first start with an empty object
const initialState = {
  emailModal: false,
  googleModal: false,
  appleModal: false,
  page: 0,
};
//create the slice

const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    stateChangeEmail: (state) => {
      state.emailModal = !state.emailModal;
    },
    stateChangePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  stateChangeEmail,
  stateChangeGoogle,
  stateChangeApple,
  stateChangePage,
} = loginSlice.actions;

export default loginSlice.reducer;
