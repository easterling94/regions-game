import { useEffect } from 'react';
import { RegHome } from '../components/RegHome';
import { environmentThunk } from '../services/thunks/environmentThunk';
import { regionsThunk } from '../services/thunks/regionsThunk';
import { useAppDispatch } from '../services/store';

export function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(environmentThunk());
    dispatch(regionsThunk());
  }, []);
  return <RegHome />;
}
