import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../../types/common';
import { TodoAPI } from '../../utils/api';

const buttonStyle =
  'flex-none rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500';

interface TodoItemProps extends Todo {
  updateTodo(todo: Todo): Promise<void>;
  deleteTodo(id: number): Promise<void>;
}

export default function TodoItem({
  id,
  todo,
  isCompleted,
  updateTodo,
  deleteTodo,
}: TodoItemProps) {
  const [isOnModify, setIsOnModify] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [modifiedTodo, setModifiedTodo] = useState(todo);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedTodo(event.currentTarget.value);
  };

  const handleClickModify = () => {
    setIsOnModify(true);
  };

  const handleClickCancel = () => {
    setIsOnModify(false);
    setModifiedTodo(todo);
  };

  const handleClickSave = async () => {
    if (modifiedTodo === '') {
      alert('입력 값이 없습니다.');
      return;
    }
    // 기존과 값이 변경된 경우에만 api 호출
    if (modifiedTodo !== todo) {
      await updateTodo({ id, todo: modifiedTodo, isCompleted });
    }
    setIsOnModify(false);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleCheck = async () => {
    const updatedTodo = await TodoAPI.put(id, todo, !isCompleted);
    updateTodo(updatedTodo);
  };

  useEffect(() => {
    if (isOnModify) {
      inputRef.current?.focus();
    }
  }, [isOnModify]);

  return (
    <li className='max-w flex flex-col items-center justify-between rounded-2xl border-2 p-4'>
      <div className='group relative min-w-full'>
        <div className='flex items-center justify-between '>
          <label className='flex'>
            <input
              type='checkbox'
              className='w-[20px]'
              checked={isCompleted}
              onChange={handleCheck}
            />

            <h3 className='pl-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
              Todo
            </h3>
          </label>
          {isOnModify ? (
            <div className='flex w-[100px] justify-between'>
              <button
                className={buttonStyle}
                data-testid='cancel-button'
                onClick={handleClickCancel}
              >
                취소
              </button>
              <button
                className={buttonStyle}
                data-testid='submit-button'
                onClick={handleClickSave}
              >
                확인
              </button>
            </div>
          ) : (
            <div className='flex w-[100px] justify-between'>
              <button
                className={buttonStyle}
                data-testid='modify-button'
                onClick={handleClickModify}
              >
                수정
              </button>
              <button
                className={buttonStyle}
                data-testid='delete-button'
                onClick={handleDelete}
              >
                삭제
              </button>
            </div>
          )}
        </div>

        {isOnModify ? (
          <input
            ref={inputRef}
            type='text'
            data-testid='modify-input'
            className='mt-3 w-full rounded-md bg-gray-200 p-2 text-black'
            defaultValue={todo}
            onChange={handleChangeInput}
          />
        ) : (
          <p className='text-md mt-5 text-left leading-6 text-gray-600'>
            {todo}
          </p>
        )}
      </div>
    </li>
  );
}
