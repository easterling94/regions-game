import styles from './gameheader.module.css';

const GameHeader = ({mode, correct, lives, hints, timer}) => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h4 className={`${styles.element} ${styles.title}`}>Stats:</h4>
          <div className={styles.stats}>
            <div className={`${styles.element} ${styles.stat}`}>Correct: {correct}</div>
            <div className={`${styles.element} ${styles.stat}`}>Lives: {lives}</div>
            <div className={`${styles.element} ${styles.stat}`}>Hits: {hints}</div>
          </div>
        </div>
        <div>
          <h4 className={`${styles.element} ${styles.timer}`}>Timer:</h4>
          <div className={`${styles.element} ${styles.timer}`}>{timer}</div>
        </div>
      </header>
    </>
  )
}

export default GameHeader