import { redirect } from 'react-router-dom';

export const redirectPage = () => {
  const token = localStorage.getItem('accessToken');

  if (token === null) {
    return redirect('/login');
  } else {
    return redirect('/todo');
  }
};

export const redirectLogin = () => {
  const token = localStorage.getItem('accessToken');

  if (token === null) {
    return redirect('/login');
  }

  return null;
};

export const redirectTodo = () => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    return redirect('/todo');
  }

  return null;
};
