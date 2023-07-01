import { ReactNode } from 'react';
export interface Todo {
  id: number;
  isCompleted: boolean;
  todo: string;
}

export interface AuthInputValue {
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
}

export interface Token {
  access_token: string;
}

export interface AuthFormProps {
  isSignUp: boolean;
  isDisabled: boolean;
  onSubmitForm: (event: React.FormEvent) => void;
  children: ReactNode;
}

export interface AuthInputProps {
  type: string;
  isAutoComplete: 'on' | 'off';
  error: string;
  isFocus: boolean;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
