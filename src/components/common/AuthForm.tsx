import { AuthFormProps } from '../../types/common';

function AuthForm({
  isSignUp,
  authHandler,
  isDisabled,
  children,
}: AuthFormProps) {
  return (
    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
      <form
        className='space-y-6'
        action='#'
        method='POST'
        onSubmit={authHandler}
      >
        {children}
        <div>
          <button
            type='submit'
            disabled={isDisabled}
            data-testid={isSignUp ? 'signup-button' : 'signin-button'}
            className={`mt-[50px] flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
              isDisabled
                ? 'bg-gray-300 text-gray-600'
                : 'bg-black text-white hover:bg-gray-700'
            }`}
          >
            {isSignUp ? '회원가입' : '로그인'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
