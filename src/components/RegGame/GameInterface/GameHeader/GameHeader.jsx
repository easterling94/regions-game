import styles from './gameheader.module.css';

function GameHeader({
  mode, correct, lives, hints, timer,
}) {
  return (
    <header className={styles.header}>
      <div>
        <p className={`${styles.element} ${styles.title}`}>Stats:</p>
        <div className={styles.stats}>
          <div className={`${styles.element} ${styles.stat}`}>
            Correct:
            {correct}
          </div>
          <div className={`${styles.element} ${styles.stat}`}>
            Lives:
            {lives}
          </div>
          <div className={`${styles.element} ${styles.stat}`}>
            Hints:
            {hints}
          </div>
        </div>
      </div>
      <div>
        <p className={`${styles.element} ${styles.timer}`}>Timer:</p>
        <div className={`${styles.element} ${styles.timer}`}>{timer}</div>
      </div>
    </header>
  );
}

export default GameHeader;
