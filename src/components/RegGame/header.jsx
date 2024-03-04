import { useAppSelector } from '../../services/store';
import styles from './header.module.css';

function GameHeader() {
  const {
    correctCount, livesCount, hintsCount, timerLeft
  } = useAppSelector((store) => store.game);
  return (
    <header className={styles.header}>
      <div>
        <p className={`${styles.element} ${styles.title}`}>Stats:</p>
        <div className={styles.stats}>
          <div className={`${styles.element} ${styles.stat}`}>
            {`Correct: ${correctCount}`}
          </div>
          <div className={`${styles.element} ${styles.stat}`}>
            {`Lives: ${livesCount}`}
          </div>
          <div className={`${styles.element} ${styles.stat}`}>
            {`Hints: ${hintsCount}`}
          </div>
        </div>
      </div>
      <div>
        <p className={`${styles.element} ${styles.timer}`}>Timer:</p>
        <div className={`${styles.element} ${styles.timer}`}>{timerLeft}</div>
      </div>
    </header>
  );
}

export default GameHeader;
