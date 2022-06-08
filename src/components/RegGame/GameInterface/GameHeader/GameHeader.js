import styles from './gameheader.module.css';
import { useState, useEffect } from 'react';
import Timer from './Timer/Timer';

const GameHeader = ({mode}) => {
  const infinitySign = '\u221e';
  const [correct, setCorrect] = useState('');
  const [lives, setLives] = useState('')
  const [hints, setHints] = useState('');

  useEffect(() => {
    setCorrect(0)
    setLives(mode === 'Exam' ? 3 : infinitySign);
    setHints(mode === 'Exam' ? 3 : infinitySign);
  },[])

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
          <Timer mode={mode}/>
        </div>
      </header>
    </>
  )
}

export default GameHeader