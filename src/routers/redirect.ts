import { redirect } from 'react-router-dom';
import { getAccessToken } from '../utils/localStorage';
import { PATH } from '../utils/constants';

export const redirectPage = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect(`/${PATH.signIn}`);
  } else {
    return redirect(`/${PATH.todo}`);
  }
};

export const redirectLogin = () => {
  const token = getAccessToken();

  if (token === null) {
    return redirect(`/${PATH.signIn}`);
  }

  return null;
};

export const redirectTodo = () => {
  const token = getAccessToken();

  if (token) {
    return redirect(`/${PATH.todo}`);
  }

  return null;
};
