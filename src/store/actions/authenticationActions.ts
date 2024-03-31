import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

export const signUp = createAsyncThunk(
  'authentication/signUp',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.post('api/user/signup', params);

      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const login = createAsyncThunk(
  'authentication/login',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.post('api/user/login', params);
      console.log('Login success | authenticationActions.ts', data);
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);
