import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';
import {ResultData} from '@app/types/result';

interface Result {
  _id: string;
  gameId: string;
  date: Date;
  firstPrize: Number;
  secondPrize: Number;
  thirdPrize: Number;
  fourthPrize: Number;
  fifthPrize: Number;
  guarantee: [Number];
  createdAt: string;
  updatedAt: string;
}

export const getResults = createAsyncThunk(
  'result/getResults',
  async (_: any, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.get('api/admin/results');

      return data as Result[];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
export const getResultByDate = createAsyncThunk(
  'result/getResultByDate',
  async (_: any, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.get(
        'api/admin/result/byDate?date=2023-11-15&gameId=64e1c27a7c8bb02e14e232fb',
      );

      return data as Result;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const createResult = createAsyncThunk(
  'result/createResult',
  async (formData: ResultData, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.post('api/admin/result', formData);

      return data as Result;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
