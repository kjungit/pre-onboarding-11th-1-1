import { useEffect } from 'react';
import AddTodo from '../components/todo/AddTodo';
import TodoItem from '../components/todo/TodoItem';
import { useTodo } from '../hooks/useTodo';

export default function TodoPage() {
  const { todos, getTodos, updateTodo, deleteTodo, addTodo } = useTodo();

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
        TodoList
      </h2>
      <AddTodo addTodo={addTodo} />
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
