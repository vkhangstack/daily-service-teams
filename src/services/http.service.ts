import type { AxiosRequestConfig, Method } from 'axios';

import { message as $message } from 'antd';
import axios from 'axios';

// import store from '@/stores';
// import { setGlobalState } from '@/stores/global.store';

import { API } from '@/config/api';
// import { history } from '@/routes/history';

const axiosInstance = axios.create({
  timeout: 6000,
});

export type Response<T = any> = {
  code: string;
  data: T;
  message: string;
};

export type MyResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T>(
  method: Lowercase<Method>,
  url: string,
  data?: object,
  headers?: object,
  params?: string | object,
  host?: string,
  responseType?: any
): MyResponse<T> => {
  const options: AxiosRequestConfig = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    baseURL: host || API.HOST,
    url: url,
    data: data,
    params: params,
    responseType: responseType || 'json',
    timeout: 15000,
  };

  return axiosInstance.request(options);
};
