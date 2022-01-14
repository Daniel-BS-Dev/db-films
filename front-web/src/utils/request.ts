import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://db-films.herokuapp.com';

export const requestBackend = (config: AxiosRequestConfig) => {
    return axios({ ...config, baseURL: BASE_URL});
  };