import { createBrowserRouter } from 'react-router-dom';
import {
  BackPage, GamePage, HomePage, StatsPage,
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
    path: '/back',
    element: <Loader><BackPage /></Loader>,
  },
  {
    path: '/stats',
    element: <StatsPage />,
  },
]);
