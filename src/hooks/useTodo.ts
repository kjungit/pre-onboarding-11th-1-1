import { useState } from 'react';
import { Todo } from '../types/common';
import { TodoApi } from '../apis/lib/todo';

interface Return {
  todos: Todo[];
  addTodo(todo: string): Promise<void>;
  getTodos(): Promise<void>;
  updateTodo(todo: Todo): Promise<void>;
  deleteTodo(id: number): Promise<void>;
}

export const useTodo = (): Return => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const data = await TodoApi.get();
    setTodos(data);
  };

  const addTodo = async (todo: string) => {
    const newTodo = await TodoApi.create(todo);
    setTodos([...todos, newTodo]);
  };

  const updateTodo = async ({ id, todo, isCompleted }: Todo) => {
    const updatedTodo = await TodoApi.update(id, todo, isCompleted);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
    );
  };

  const deleteTodo = async (id: number) => {
    await TodoApi.delete(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo,
  };
};
