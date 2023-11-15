import {createSlice} from '@reduxjs/toolkit';
import {
  createResult,
  getResultByDate,
  getResults,
} from '../actions/admin/resultActions';

type BookingState = {
  bookings: Array<any>;
  currentBooking: any;
  loading: boolean;
  error: any;
};

const initialState: BookingState = {
  bookings: [],
  currentBooking: {},
  loading: false,
  error: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getResults.pending, state => {
        state.loading = true;
      })
      .addCase(getResults.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.bookings = payload;
      })
      .addCase(getResults.rejected, (state, {payload}) => {
        state.loading = false;
        state.bookings = [];
        state.error = payload;
      })
      .addCase(getResultByDate.pending, state => {
        state.loading = true;
      })
      .addCase(getResultByDate.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.currentBooking = payload;
      })
      .addCase(getResultByDate.rejected, (state, {payload}) => {
        state.loading = false;
        state.currentBooking = {};
        state.error = payload;
      })
      .addCase(createResult.pending, state => {
        state.loading = true;
      })
      .addCase(createResult.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.bookings = [...state.bookings, payload];
      })
      .addCase(createResult.rejected, (state, {payload}) => {
        state.loading = false;
        state.bookings = [];
        state.error = payload;
      });
  },
});

export default bookingSlice.reducer;
