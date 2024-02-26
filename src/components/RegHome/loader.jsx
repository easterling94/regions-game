import { useEffect } from 'react';
import { LoaderAnimation } from './loader-animation';
import styles from './loader-animation.module.css';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { initialThunk } from '../../services/thunks/regionsThunk';

export function Loader({ children }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initialThunk());
  }, []);
  const { regions } = useAppSelector((store) => store.regions);

  if (regions) return children;
  return (
    <h1 className={styles.requesting}>
      Загружаем данные с сервера
      <LoaderAnimation />
    </h1>
  );
}
