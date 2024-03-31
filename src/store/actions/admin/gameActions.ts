import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';
import date from 'date-and-time';

export const getGameList = createAsyncThunk(
  'game/getGameList',
  async (_: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const {data} = await api.get('api/games/');

      console.log('gameActions.ts | getGameList', data);

      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

// Getting the game closer to the current time
export const calculateClosestGame = (games: Array<any>) => {
  const currentDate = new Date();

  const currentTime: string = date.format(currentDate, 'hh:mm A');
  const currentTimeWithDate = new Date(
    currentDate.toDateString() + ' ' + currentTime,
  );
  // console.log(currentTimeWithDate);

  let less = games[0]; // Initialize with a time before any game

  // games.forEach(item => {
  //   const itemTimeWithDate = new Date(
  //     currentDate.toDateString() + ' ' + item.time,
  //   );

  //   if (
  //     less.timeWithDate < currentTimeWithDate &&
  //     itemTimeWithDate > currentTimeWithDate
  //   ) {
  //     less = {...item, timeWithDate: itemTimeWithDate};
  //   }
  // });

  return less;
};
