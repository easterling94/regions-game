import { createBrowserRouter } from 'react-router-dom';
import { BackPage, GamePage, HomePage } from '../pages/index';

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
    element: <BackPage />
  }
])