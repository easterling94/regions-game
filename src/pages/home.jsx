import { useEffect } from 'react';
import { RegHome } from '../components/RegHome';
import { getDataThunk } from '../services/thunks/getDataThunk';
import { useAppDispatch } from '../services/store';

export function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataThunk());
  }, []);
  return <RegHome />;
}
