import axios from 'axios';

interface ITodo {
  todo: string;
  isCompleted: boolean;
}

interface CreateResponse {
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
    const accessToken = localStorage.getItem('accessToken');

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
  static #TODOS = '/todos';

  static async get(): Promise<CreateResponse[]> {
    const { data } = await API.get(TodoAPI.#TODOS);
    return data;
  }

  static async post(todo: string): Promise<CreateResponse> {
    const { data } = await API.post(TodoAPI.#TODOS, todo);
    return data;
  }

  static async put(todo: ITodo, id: number): Promise<CreateResponse> {
    const { data } = await API.put(`${TodoAPI.#TODOS}/${id}`, todo);
    return data;
  }

  static async delete(id: number): Promise<string> {
    const { data } = await API.delete(`${TodoAPI.#TODOS}/${id}`);
    return data;
  }
}

export class AuthAPI {
  static #AUTH = '/auth';

  static async signup(auth: IAuth) {
    const { data } = await API.post(`${AuthAPI.#AUTH}/signup`, auth);
    return data;
  }

  static async signin(auth: IAuth): Promise<IToken> {
    const { data } = await API.post(`${AuthAPI.#AUTH}/signin`, auth);
    return data;
  }
}
