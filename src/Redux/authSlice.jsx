import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

//first start with an empty object
const initialState = {
  name: '',
  email: '',
  password: '',
  error: null,
};
//create Thunk

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateCurrentUser(auth, { displayName: name });
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const singOut = createAsyncThunk('auth/singOut', async () => {
  await signOut(auth);
});

//create the slice

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //reducer for signUp
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
