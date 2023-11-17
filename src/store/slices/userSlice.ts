import {createSlice} from '@reduxjs/toolkit';
import {getUserList} from '../actions/admin/userActions';

// Define a type for the slice state
type UserState = {
  users: Array<any>;
  loading: boolean;
  error: any;
  user: {} | null;
};

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserList.pending, state => {
        state.loading = true;
      })
      .addCase(getUserList.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.users = payload;
      })
      .addCase(getUserList.rejected, (state, {payload}) => {
        state.loading = false;
        state.users = [];
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
