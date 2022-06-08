import styles from './gameboard.module.css';
import Answer from './Answer/Answer'
import { useState, useEffect } from 'react';

const GameBoard = ({ regions }) => {
  let regionsData = [...regions];
  const [question, setQuestion] = useState('');
  let random = Math.floor(Math.random() * 100);
  useEffect(() => {
    if (regionsData.length === 0) return;
    console.log(random)
    setQuestion(regionsData[random].regName);
  },[])
  const ans1 = 18;
  const ans2 = 19;
  const ans3 = 20;
  const ans4 = 21;
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <div className={`${styles.box} ${styles.question}`}>{question}</div>
        <Answer answer={ans1}/>
        <Answer answer={ans2}/>
        <Answer answer={ans3}/>
        <Answer answer={ans4}/>
        <div className={`${styles.box} ${styles.next}`}>Submit</div>
      </div>
    </div>
  )
}

export default GameBoard