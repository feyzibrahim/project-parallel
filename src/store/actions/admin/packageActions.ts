import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../../api/api';
import {PackageFormDataForSending} from '@app/types/common';

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

      const {data} = await api.get('api/admin/packages');

      return data as Package[];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const createPackage = createAsyncThunk(
  'package/createPackage',
  async (formData: PackageFormDataForSending, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.post('api/admin/package', formData);

      return data as Package;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const updatePackage = createAsyncThunk(
  'package/updatePackage',
  async (
    {id, formData}: {id: string; formData: PackageFormDataForSending},
    {rejectWithValue},
  ) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.patch(`api/admin/package/${id}`, formData);

      return data as Package;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

export const deletePackage = createAsyncThunk(
  'package/deletePackage',
  async (id: string, {rejectWithValue}) => {
    try {
      const api = await getAxiosInstance();

      const {data} = await api.delete(`api/admin/package/${id}`);

      console.log(data);

      return data as Package;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  },
);
