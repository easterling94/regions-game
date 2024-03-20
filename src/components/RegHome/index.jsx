import { Link } from 'react-router-dom';
import styles from './home.module.css';

export function RegHome() {
  return (
    <div className={styles.home}>
      <Link className={styles.link} to="game">Игра</Link>
      <Link className={styles.link} to="admin">Админка</Link>
    </div>
  );
}
