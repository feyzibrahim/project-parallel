// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import { axiosBaseQuery } from 'src/api/api';

// export const gameSlice = createApi({
//   reducerPath: 'gameSlice',
//   //   baseQuery: fetchBaseQuery({baseUrl: 'https://project-parallel.onrender.com/'}),
//   baseQuery: axiosBaseQuery(),
//   endpoints: builder => ({
//     gameSlice: builder.query({
//       query: () => ({method: 'get', url: 'api/games/'}),
//     }),
//   }),
// });

// export const {useGameSliceQuery} = gameSlice;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

// Define a type for the slice state
type GameState = {
  token: string;
  game: Array<any>;
};

const initialState: GameState = {
  token: '',
  game: [],
};

export const getGameList = createAsyncThunk(
  'game/getGameList',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('api/games/');
      // console.log(response);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const getGameBookings = createAsyncThunk(
  'game/getGameBookings',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('api/booking/');
      // console.log(response);
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const saveGames = createAsyncThunk(
  'game/saveGames',
  async (params: any, {rejectWithValue}) => {
    // console.log(params,'=======PARAMS')
    const api = await getAxiosInstance();
    try {
      const response = await api.post('api/booking/insert-many/',params);
      console.log(response,'=========jkhgjkhgjkh');
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const getGameResults = createAsyncThunk(
  'game/getGameResults',
  async (params: any, {rejectWithValue}) => {
    // console.log(params,'=======PARAMS')
    const api = await getAxiosInstance();
    try {
      const response = await api.get('api/prize/',params);
      console.log(response,'=========jkhgjkhgjkh');
      return response?.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.game = action?.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setGame} = gameSlice.actions;

export default gameSlice.reducer;
