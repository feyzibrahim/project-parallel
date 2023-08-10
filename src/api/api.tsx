import axios from 'axios';
import store from '../store';

export const getAxiosInstance = async () => {
  const state = store.getState();
  // console.log('STATE========', state);
  let token = ''
  const BASE_URL = 'https://project-parallel.onrender.com/';

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
        console.log(error)
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