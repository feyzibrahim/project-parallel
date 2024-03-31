import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

// Define a type for the slice state
type AuthState = {
  token: string;
  user: {} | null;
  loading: boolean;
  error: any;
};

const initialState: AuthState = {
  token: '',
  user: null,
  loading: false,
  error: null,
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
      const {data} = await api.post('api/user/login', params);
      console.log('Login success | auth Slice', data);
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginwithUsername.pending, state => {
        state.loading = true;
      })
      .addCase(loginwithUsername.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.user = payload;
        state.token = payload.token;
      })
      .addCase(loginwithUsername.rejected, (state, {payload}) => {
        state.loading = false;
        state.user = {};
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
