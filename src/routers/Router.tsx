import { createBrowserRouter } from 'react-router-dom';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';
import NotFoundPage from '../pages/NotFoundPage';
import { redirectLogin, redirectTodo } from './redirect';
import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/join',
        element: <JoinPage />,
        loader: redirectTodo,
      },
      {
        path: '/login',
        element: <LoginPage />,
        loader: redirectTodo,
      },
      {
        path: '/todo',
        element: <TodoPage />,
        loader: redirectLogin,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
