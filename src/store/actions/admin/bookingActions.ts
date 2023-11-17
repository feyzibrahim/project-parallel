import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';

interface Booking {
  _id: string;
  gameId: string;
  userId: string;
  lsk: string;
  number: Number;
  count: Number;
  amountC: Number;
  amountD: Number;
  createdAt: string;
  updatedAt: string;
}

export const getBookings = createAsyncThunk(
  'booking/getBookings',
  async (gameId: string, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.get(`api/admin/bookings?gameId=${gameId}`);

      return data as Booking[];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (params: any, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.post('api/booking/insert-many/', params);
      return data as [Booking];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
