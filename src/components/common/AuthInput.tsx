import { useEffect, useRef } from 'react';
import { AuthInputProps } from '../../types/common';

function AuthInput({
  type,
  isAutoComplete,
  error,
  isFocus,
  onChangeInput,
}: AuthInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <label className='block text-sm font-bold leading-6 text-gray-900'>
          {type[0].toUpperCase() + type.slice(1)}
        </label>
      </div>

      <div className='mt-1'>
        <input
          name={type}
          type={type}
          ref={inputRef}
          autoComplete={isAutoComplete}
          data-testid={`${type}-input`}
          onChange={onChangeInput}
          className='block w-full rounded-md border-2 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
        />
        <div className='mt-2 flex h-2 items-start text-xs text-red-700'>
          {error ? error : ''}
        </div>
      </div>
    </div>
  );
}

export default AuthInput;
