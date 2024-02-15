import { LoaderAnimation } from './loader-animation';
import styles from './loader-animation.module.css';

export function Loader() {
  return (
    <h1 className={styles.requesting}>
      Загружаем данные с сервера
      <LoaderAnimation />
    </h1>
  );
}
