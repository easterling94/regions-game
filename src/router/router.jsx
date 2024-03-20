import { createBrowserRouter } from 'react-router-dom';
import {
  AdminPage,
  GamePage,
  HomePage,
  ErrorPage,
} from '../pages/index';
import { Loader } from '../components/Loader/loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Loader><HomePage /></Loader>,
  },
  {
    path: '/game',
    element: <Loader><GamePage /></Loader>,
  },
  {
    path: '/admin',
    element: <Loader><AdminPage /></Loader>,
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);
