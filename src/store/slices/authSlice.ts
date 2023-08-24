// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export const authSlice = createApi({
//   reducerPath: 'authPath',
//   baseQuery: fetchBaseQuery({baseUrl: 'https://project-parallel.onrender.com/'}),
//   endpoints: builder => ({
//     login: builder.query({
//       query: () => 'api/user/login',
//     }),
//   }),
// });

// export const {useLoginQuery} = authSlice;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { getAxiosInstance} from '../../api/api'

// Define a type for the slice state
type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: '',
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('api/user/signup', params);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const loginwithUsername = createAsyncThunk(
  'auth/loginwithUsername',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.post('api/user/login', params);
      console.log(response)
      return response;
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  },
);

export const userList = createAsyncThunk(
  'auth/userList',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('api/admin/users');
      console.log(response)
      return response?.data;
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setToken: (state, action) => {
    //   state.token = action?.payload;
    // },
  },
  extraReducers: builder => {},
});

// export const {setToken} = authSlice.actions;

export default authSlice.reducer;
