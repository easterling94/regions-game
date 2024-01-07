import { createBrowserRouter } from 'react-router-dom';
import RegGame from '../components/RegGame/RegGame';
import App from '../components/App';
import RegBack from '../components/RegBack/RegBack';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/game',
    element: <RegGame />,
  },
  {
    path: '/back',
    element: <RegBack />
  }
])