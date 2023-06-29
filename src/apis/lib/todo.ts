import { axiosClient } from '../apiClient';

interface CreateResponse {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}

export class TodoApi {
  static async get(): Promise<CreateResponse[]> {
    return await axiosClient.get('/todos');
  }

  static async create(todo: string): Promise<CreateResponse> {
    return await axiosClient.post('/todos', { todo });
  }

  static async delete(id: number): Promise<string> {
    return await axiosClient.delete(`/todos/${id}`);
  }

  static async update(
    id: number,
    todo: string,
    isCompleted: boolean,
  ): Promise<CreateResponse> {
    return await axiosClient.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
  }
}
