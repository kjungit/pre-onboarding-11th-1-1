import axios, { AxiosError } from 'axios';
import { TOKEN } from '../utils/constants';
import { AxiosResponse } from 'axios';

interface ErrorResponse {
  error: string;
  message: string[];
  statusCode: number;
}
export const axiosClient = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(TOKEN);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response(응답 인터셉터) :>>', response);
    return response.data;
  },
  (error: AxiosError<ErrorResponse>) => {
    console.log('error (응답 인터셉터) :>> ', error);
    return error.response?.data;
  },
);
