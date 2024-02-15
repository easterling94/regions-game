import { useEffect } from 'react';
import { RegHome } from '../components/RegHome';
import { initialThunk } from '../services/thunks/regionsThunk';
import { useAppDispatch } from '../services/store';

export function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initialThunk());
  }, []);
  return <RegHome />;
}
