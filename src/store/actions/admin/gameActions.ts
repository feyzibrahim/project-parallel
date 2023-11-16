import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';

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
  const currentTime = new Date().getTime();
  return games.reduce((closest, currentGame) => {
    const [time, period] = currentGame.time.split(' ');
    const [hours, minutes] = time.split(':');
    let parsedHours = parseInt(hours, 10);

    if (period === 'PM' && parsedHours < 12) {
      parsedHours += 12;
    } else if (period === 'AM' && parsedHours === 12) {
      parsedHours = 0;
    }

    const gameTime = new Date();
    gameTime.setHours(parsedHours);
    gameTime.setMinutes(parseInt(minutes, 10));
    gameTime.setSeconds(0);

    const timeDiff = Math.abs(gameTime.getTime() - currentTime);
    const closestTimeDiff = closest
      ? Math.abs(new Date(closest.time).getTime() - currentTime)
      : Infinity;

    return timeDiff < closestTimeDiff ? currentGame : closest;
  }, null);
};
