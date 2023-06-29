import { useCallback, useEffect, useState } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoItem from '../components/todo/TodoItem';
import { Todo } from '../types/common';
import { TodoApi } from '../apis/lib/todo';

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // TodoItem (자식)에서 todo 수정 후 부모의 setTodos를 호출해야 되기 때문에 생성
  const updateTodo = (updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const fetchTodo = useCallback(() => {
    TodoApi.get().then((data) => {
      setTodos(data);
    });
  }, []);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        TodoList
      </h2>
      <AddTodo fetchTodo={fetchTodo} />
      <ul className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pb-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
