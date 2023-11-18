import {createSlice} from '@reduxjs/toolkit';
import {getUserList} from '../actions/admin/userActions';

// Define a type for the slice state
type UserState = {
  users: Array<any>;
  loading: boolean;
  error: any;
  user: {} | null;
  selectedCustomer: {} | null;
  filteredUsers: Array<any>;
};

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  user: null,
  selectedCustomer: null,
  filteredUsers: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectCustomer: (state, {payload}) => {
      state.selectedCustomer = payload;
    },
    searchUsers: (state, {payload}) => {
      const searchQuery = (payload || '').toLowerCase();
      state.filteredUsers = state.users.filter(user =>
        user.username.toLowerCase().includes(searchQuery),
      );
    },
    clearSearch: state => {
      state.filteredUsers = [];
    },
  },
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

export const {selectCustomer, searchUsers, clearSearch} = userSlice.actions;

export default userSlice.reducer;
