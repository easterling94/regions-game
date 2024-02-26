import { Link } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import { Loader } from './loader';
import styles from './home.module.css';

export function RegHome() {
  const { regions } = useAppSelector((store) => store.regions);
  return (
    <div className={styles.home}>
      <Link className={styles.link} to="game">Игра</Link>
      <Link className={styles.link} to="back">Регионы</Link>
    </div>
  );
}
