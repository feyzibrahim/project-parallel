import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

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
      console.log('Login success');
      return response;
    } catch (error: any) {
      console.log(error);
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
