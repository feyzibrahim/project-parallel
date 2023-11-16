import {createSlice} from '@reduxjs/toolkit';
import {getBookings, createBooking} from '../actions/admin/bookingActions';

type BookingState = {
  bookings: Array<any>;
  loading: boolean;
  error: any;
};

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBookings.pending, state => {
        state.loading = true;
      })
      .addCase(getBookings.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.bookings = payload;
      })
      .addCase(getBookings.rejected, (state, {payload}) => {
        state.loading = false;
        state.bookings = [];
        state.error = payload;
      })
      .addCase(createBooking.pending, state => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.bookings = [...state.bookings, ...payload];
      })
      .addCase(createBooking.rejected, (state, {payload}) => {
        state.loading = false;
        state.bookings = [];
        state.error = payload;
      });
  },
});

export default bookingSlice.reducer;
