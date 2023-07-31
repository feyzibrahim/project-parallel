import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
  reducerPath: 'authPath',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const {useGetAllProductsQuery} = authSlice;
