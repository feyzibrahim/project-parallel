import {createSlice} from '@reduxjs/toolkit';
import {
  getPackages,
  createPackage,
  deletePackage,
  updatePackage,
} from '../actions/admin/packageActions';

type PackageState = {
  packages: Array<any>;
  loading: boolean;
  error: any;
};

const initialState: PackageState = {
  packages: [],
  loading: false,
  error: null,
};

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPackages.pending, state => {
        state.loading = true;
      })
      .addCase(getPackages.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.packages = payload;
      })
      .addCase(getPackages.rejected, (state, {payload}) => {
        state.loading = false;
        state.packages = [];
        state.error = payload;
      })
      .addCase(createPackage.pending, state => {
        state.loading = true;
      })
      .addCase(createPackage.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.packages = [...state.packages, payload];
      })
      .addCase(createPackage.rejected, (state, {payload}) => {
        state.loading = false;
        state.packages = [];
        state.error = payload;
      })
      .addCase(deletePackage.pending, state => {
        state.loading = true;
      })
      .addCase(deletePackage.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.packages = state.packages.filter(
          packageItem => packageItem._id !== payload._id,
        );
      })
      .addCase(deletePackage.rejected, (state, {payload}) => {
        state.loading = false;
        state.packages = [];
        state.error = payload;
      })
      .addCase(updatePackage.pending, state => {
        state.loading = true;
      })
      .addCase(updatePackage.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.packages = state.packages.map(packageItem =>
          packageItem.id === payload._id ? payload : packageItem,
        );
      })
      .addCase(updatePackage.rejected, (state, {payload}) => {
        state.loading = false;
        state.packages = [];
        state.error = payload;
      });
  },
});

export default packageSlice.reducer;
