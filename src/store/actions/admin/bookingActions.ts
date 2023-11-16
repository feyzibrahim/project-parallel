import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';
import {BookingData} from '@app/types/booking';

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
  async (_: any, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.get(
        'api/admin/bookings?gameId=64e1c27a7c8bb02e14e232fb',
      );

      console.log(data);

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
      console.log('Create booking is called');
      const api = await getAxiosInstance();

      const {data} = await api.post('api/booking/insert-many/', params);
      console.log('booking created', data);
      return data as [Booking];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
