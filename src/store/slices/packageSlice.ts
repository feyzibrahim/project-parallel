import {createSlice} from '@reduxjs/toolkit';
import {getPackages} from '../actions/user/packageActions';

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
      });
  },
});

export default packageSlice.reducer;
