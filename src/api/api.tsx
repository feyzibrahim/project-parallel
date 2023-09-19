import axios, {AxiosRequestConfig, AxiosError} from 'axios';
import store from '../store';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';

const BASE_URL = 'https://project-parallel.onrender.com/';

export const getAxiosInstance = async () => {
  const state = store.getState();
  // console.log('STATE========', state);
  let token = '';

  try {
  } catch (error) {
  } finally {
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
      },
    });

    instance.interceptors.request.use(
      function (config) {
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response =>
        new Promise((resolve, reject) => {
          resolve(response);
        }),
      async error => {
        // console.log(error);
        if (!error.response) {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      },
    );

    return instance;
  }
};

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params}) => {
    try {
      const result = await axios({url: BASE_URL + url, method, data, params});
      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
