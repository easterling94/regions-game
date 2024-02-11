import { createBrowserRouter } from 'react-router-dom';
import {
  BackPage, GamePage, HomePage, StatsPage,
} from '../pages/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/back',
    element: <BackPage />,
  },
  {
    path: '/stats',
    element: <StatsPage />,
  },
]);
