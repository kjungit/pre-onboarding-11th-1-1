import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/common/AuthForm';
import AuthInput from '../components/common/AuthInput';
import { validateInput, isValidEmail } from '../utils/validation';
import { AuthInputValue } from '../types/common';
import { AuthAPI } from '../utils/api';
import { setAccessToken } from '../utils/localStorage';
import { PATH } from '../utils/constants';

function LoginPage() {
  const [authInput, setAuthInput] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({
    emailError: '',
    passwordError: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAuthInput({ ...authInput, [name]: value });
    const { error, isDisabled } = validateInput({
      authInput: { ...authInput, [name]: value },
      validate: (values: AuthInputValue) => {
        const newFormErrors = { ...formErrors };
        const { email, password } = values;

        if (name === 'email') {
          if (email.trim() === '') {
            newFormErrors.emailError = '이메일을 입력해주세요.';
          } else if (!isValidEmail(email)) {
            newFormErrors.emailError = '유효한 이메일 형식이 아닙니다.';
          } else newFormErrors.emailError = '';
        }

        if (name === 'password') {
          if (password.trim() === '') {
            newFormErrors.passwordError = '비밀번호를 입력해주세요.';
          } else if (password.length < 8) {
            newFormErrors.passwordError = '비밀번호는 8자 이상이어야 합니다.';
          } else newFormErrors.passwordError = '';
        }
        return newFormErrors;
      },
    });
    setFormErrors(error);
    setIsDisabled(isDisabled);
  };

  const handleAuth = (event: React.FormEvent) => {
    event.preventDefault();

    AuthAPI.signIn(authInput)
      .then(({ access_token }) => {
        setAccessToken(access_token);
        navigate(`/${PATH.todo}`);
      })
      .catch((error) => {
        alert(error.response?.data.message);
      });
  };

  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 '>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          SignIn
        </h2>
        <AuthForm
          isSignUp={false}
          isDisabled={isDisabled}
          onSubmitForm={handleAuth}
        >
          <AuthInput
            type='email'
            isAutoComplete='on'
            error={formErrors.emailError}
            isFocus={true}
            onChangeInput={handleInputChange}
          />
          <AuthInput
            type='password'
            isAutoComplete='off'
            error={formErrors.passwordError}
            isFocus={false}
            onChangeInput={handleInputChange}
          />
        </AuthForm>
        <div>
          <Link
            to={`/${PATH.signUp}`}
            className='mt-4 flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            회원가입 페이지로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
