import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';

interface Package {
  _id: string;
  name: string;
  userId: string;
  single: {
    rate: number;
    commission: number;
  };
  double: {
    rate: number;
    commission: number;
  };
  lskSuper: {
    rate: number;
    commission: number;
  };
  box: {
    rate: number;
    commission: number;
  };
  createdAt: string;
  updatedAt: string;
}

export const getPackages = createAsyncThunk(
  'package/getPackages',
  async (_: any, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.get(
        'api/package?userId=64d3b967d926148326b352a4',
      );

      return data as Package[]; // Assuming the API returns an array of packages
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
