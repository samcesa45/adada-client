import axios, { type InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { env } from '../config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = Cookies.get('accessToken');
  if (config.headers) {
    config.headers.Accept = 'application/json';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}

export const api = axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error.response?.status === 401) {
      return api(error.config);
    }
  },
);
