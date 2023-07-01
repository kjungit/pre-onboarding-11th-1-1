import { Navigate, createBrowserRouter } from 'react-router-dom';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';
import NotFoundPage from '../pages/NotFoundPage';
import { redirectLogin, redirectTodo } from './redirect';
import { Root } from './Root';
import { PATH } from '../utils/constants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${PATH.todo}`} />,
      },
      {
        path: PATH.signUp,
        element: <JoinPage />,
        loader: redirectTodo,
      },
      {
        path: PATH.signIn,
        element: <LoginPage />,
        loader: redirectTodo,
      },
      {
        path: PATH.todo,
        element: <TodoPage />,
        loader: redirectLogin,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
