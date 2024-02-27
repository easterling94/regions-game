import { useEffect } from 'react';
import { LoaderAnimation } from './loader-animation';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { initialThunk } from '../../services/thunks/regionsThunks';
import styles from './loader-animation.module.css';

export function Loader({ children }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initialThunk());
  }, []);
  const { regions } = useAppSelector((store) => store.regions);

  if (regions) return children;
  return (
    <div className={styles.loader}>
      <h1 className={styles.requesting}>
        Загружаем данные с сервера
        <LoaderAnimation />
      </h1>
    </div>
  );
}
