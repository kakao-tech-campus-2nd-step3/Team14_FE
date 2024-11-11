import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const initInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });
  return instance;
};

//TODO: 임시
// const BASE_URL = 'http://3.34.191.43';
const TOKEN = 'token';

export const fetchInstance = initInstance({
  // baseURL: BASE_URL,
});

export const fetchAuthInstance = initInstance({
  // baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
