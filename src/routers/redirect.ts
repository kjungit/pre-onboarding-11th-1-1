import { redirect } from 'react-router-dom';
import { getAccessToken } from '../utils/localStorage';

export const redirectPage = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect('/login');
  } else {
    return redirect('/todo');
  }
};

export const redirectLogin = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect('/login');
  }

  return null;
};

export const redirectTodo = () => {
  const token = getAccessToken();

  if (token) {
    return redirect('/todo');
  }

  return null;
};
