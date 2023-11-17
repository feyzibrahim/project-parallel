import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';
import date from 'date-and-time';

export const getGameList = createAsyncThunk(
  'game/getGameList',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.get('api/games/');

      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

// Getting the game closer to the current time
export const calculateClosestGame = (games: Array<any>) => {
  const now = new Date();

  const currentTime: string = date.format(now, 'hh:mm A');
  let less = games[0];

  games.map(item => {
    if (less.time < currentTime) {
      less = item;
    }
  });

  return less;
};
