import axios from 'axios';

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

interface ITodo {
  todo: string;
}

export class TodoAPI {
  static #TODOS = '/todos';

  static async getTodos() {
    const { data } = await API.get(TodoAPI.#TODOS);
    return data;
  }

  static async postTodo(todo: ITodo) {
    const { data } = await API.post(TodoAPI.#TODOS, todo);
    return data;
  }

  static async putTodo(todo: ITodo, id: number) {
    const { data } = await API.put(`${TodoAPI.#TODOS}/${id}`, todo);
    return data;
  }

  static async deleteTodo(id: number) {
    const { data } = await API.delete(`${TodoAPI.#TODOS}/${id}`);
    return data;
  }
}

interface IAuth {
  email: string;
  password: string;
}

export class AuthAPI {
  static #SIGNUP = '/auth/signup';
  static #SIGNIN = '/auth/signin';

  static async signup(auth: IAuth) {
    const { data } = await API.post(AuthAPI.#SIGNUP, auth);
    return data;
  }

  static async signin(auth: IAuth) {
    const { data } = await API.post(AuthAPI.#SIGNIN, auth);
    return data;
  }
}
