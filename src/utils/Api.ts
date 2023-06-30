import axios from 'axios';

import { getAccessToken } from './localStorage';

interface ITodo {
  todo: string;
  isCompleted: boolean;
}

interface ITodoResponse {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}

interface IAuth {
  email: string;
  password: string;
}

interface IToken {
  access_token: string;
}

export const API = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
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

  static async get(): Promise<ITodoResponse[]> {
    const { data } = await API.get(this.TODOS);
    return data;
  }

  static async post(todo: string): Promise<ITodoResponse> {
    const { data } = await API.post(this.TODOS, todo);
    return data;
  }

  static async put(todo: ITodo, id: number): Promise<ITodoResponse> {
    const { data } = await API.put(`${this.TODOS}/${id}`, todo);
    return data;
  }

  static async delete(id: number): Promise<string> {
    const { data } = await API.delete(`${this.TODOS}/${id}`);
    return data;
  }
}

export class AuthAPI {
  private static AUTH = '/auth';

  static async signup(auth: IAuth): Promise<string> {
    const { data } = await API.post(`${this.AUTH}/signup`, auth);
    return data;
  }

  static async signin(auth: IAuth): Promise<IToken> {
    const { data } = await API.post(`${this.AUTH}/signin`, auth);
    return data;
  }
}
