import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';

export const getUserList = createAsyncThunk(
  'users/getUserList',
  async (_: null, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.get('api/admin/users');
      console.log(data);

      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
