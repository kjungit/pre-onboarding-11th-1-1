import axios from 'axios';

import { getAccessToken } from './localStorage';

interface TodoResponse {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}

interface Auth {
  email: string;
  password: string;
}

interface Token {
  access_token: string;
}

export const axiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export class TodoAPI {
  private static TODOS = '/todos';

  static async get(): Promise<TodoResponse[]> {
    const { data } = await axiosInstance.get(this.TODOS);
    return data;
  }

  static async post(todo: string): Promise<TodoResponse> {
    const { data } = await axiosInstance.post(this.TODOS, { todo });
    return data;
  }

  static async put(
    id: number,
    todo: string,
    isCompleted: boolean,
  ): Promise<TodoResponse> {
    const { data } = await axiosInstance.put(`${this.TODOS}/${id}`, {
      todo,
      isCompleted,
    });
    return data;
  }

  static async delete(id: number): Promise<string> {
    const { data } = await axiosInstance.delete(`${this.TODOS}/${id}`);
    return data;
  }
}

export class AuthAPI {
  private static AUTH = '/auth';

  static async signUp(auth: Auth): Promise<string> {
    const { data } = await axiosInstance.post(`${this.AUTH}/signup`, auth);
    return data;
  }

  static async signIn(auth: Auth): Promise<Token> {
    const { data } = await axiosInstance.post(`${this.AUTH}/signin`, auth);
    return data;
  }
}
