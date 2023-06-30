import { validateInputProps } from '../types/common';

export const isValidEmail = (email: string) => {
  const emailPattern = /@/;
  return emailPattern.test(email);
};

export const validateInput = ({ authInput, validate }: validateInputProps) => {
  const error = validate(authInput);

  const isValid = () => {
    return (
      Object.values(error).every((err) => err === '') &&
      Object.values(authInput).every((val) => val !== '')
    );
  };

  return {
    error,
    isDisabled: !isValid(),
  };
};
