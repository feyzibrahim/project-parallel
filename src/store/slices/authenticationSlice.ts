import {createSlice} from '@reduxjs/toolkit';
import {login, signUp} from '../actions/authenticationActions';
// Define a type for the slice state
type AuthenticationState = {
  token: string;
  user: {} | null;
  loading: boolean;
  error: any;
};

const initialState: AuthenticationState = {
  token: '',
  user: null,
  loading: false,
  error: null,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, {payload}) => {
        state.loading = false;
        state.user = {};
        state.error = payload;
      })
      .addCase(signUp.pending, state => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
        state.token = payload.token;
      })
      .addCase(signUp.rejected, (state, {payload}) => {
        state.loading = false;
        state.user = {};
        state.error = payload;
      });
  },
});

export default authenticationSlice.reducer;
