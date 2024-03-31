import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';

export const getUserList = createAsyncThunk(
  'users/getUserList',
  async (_: null, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.get('api/admin/users');

      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

// export const selectFilteredUsers = createSelector(
//   state => state.users.users,
//   state => state.users.searchQuery,
//   (users, searchQuery: string) => {
//     if (searchQuery.trim() === '') {
//       return users;
//     } else {
//       return (users as any[]).filter((user: any) =>
//         user.username.toLowerCase().includes(searchQuery.toLowerCase()),
//       );
//     }
//   },
// );
