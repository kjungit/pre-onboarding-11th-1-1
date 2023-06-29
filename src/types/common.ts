import { ReactNode } from 'react';

export interface AuthInputValue {
  // 사용
  email: string;
  password: string;
}

export interface FormErrors {
  emailError: string;
  passwordError: string;
}

export interface validateInputProps {
  authInput: AuthInputValue;
  validate: (values: AuthInputValue) => FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Token {
  access_token: string;
}

export interface AuthFormProps {
  isSignUp: boolean;
  isDisabled: boolean;
  authHandler: (event: React.FormEvent) => void;
  children: ReactNode;
}

export interface AuthInputProps {
  type: string;
  isAutoComplete: 'on' | 'off';
  error: string;
  isFocus: boolean;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
