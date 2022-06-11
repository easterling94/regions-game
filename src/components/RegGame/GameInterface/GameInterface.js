import GameHeader from './GameHeader/GameHeader.js'
import GameBoard from './GameBoard/GameBoard.js'
import GameFooter from './GameFooter/GameFooter.js'
import FinalStats from './FinalStats/FinalStats.js'
import { useState, useEffect } from 'react';
import styles from './gameinterface.module.css'

const GameInterface = ( {regions, mode, resetMode} ) => {
  const infinitySign = '\u221e';
  const [correct, setCorrect] = useState('');
  const [lives, setLives] = useState('')
  const [hints, setHints] = useState('');
  const [timer, setTimer] = useState('');
  const [timerOver, setTimerOver] = useState(0);
  const limit = mode === 'Exam' ? '00:00' : '99:99';
  const examStartingTime = '03:00';

  useEffect(() => {
    setCorrect(0)
    setLives(mode === 'Exam' ? 10 : infinitySign);
    setHints(mode === 'Exam' ? 10 : infinitySign);
  },[])

  useEffect(() => {
    setTimer(mode === 'Exam' ? examStartingTime : '00:00');
  },[])

  useEffect(() => {
    if(lives <= 0) return;
    if(timerOver !== 0) return;
    if (timer === limit) {
      setTimerOver(timerOver + 1);
      return;
    };
    const zero = '0';
    let currentTime = timer.split(':').map((el) => Number(el));
    let nextTime;
    switch (mode) {
      case 'Exam':
        if(currentTime[1] === 0) {
          nextTime = [currentTime[0] - 1,currentTime[1] = 59];
        } else {
          nextTime = [currentTime[0],currentTime[1] - 1];
        }
        break;
      case 'Training': 
        if(currentTime[1] < 59) {
          nextTime = [currentTime[0],currentTime[1] + 1];
        } else {
          nextTime = [currentTime[0] + 1,0];
        }
        break;
      default:
        break;
    }
    currentTime = nextTime.map((el) => el < 10 ? `${zero}${el.toString()}`: el.toString());
    setTimeout(() => setTimer(currentTime.join(':')),1000)
  },[timer]);

  const hardStop = () => {
    setTimerOver(timerOver + 1);
  }

  return (
    <div className={styles.wrapper}>
      <GameHeader mode={mode} correct={correct} lives={lives} hints={hints} timer={timer}/>
      {lives <= 0 || timerOver !== 0 ? 
        <FinalStats correct={correct} lives={lives} hints={hints} timer={timer} examStartingTime={examStartingTime} mode={mode}/> : 
        <GameBoard mode={mode} regions={regions} setCorrect={setCorrect} setLives={setLives} setHints={setHints} correct={correct} lives={lives} hints={hints} hardStop={hardStop}/> 
      }
      <GameFooter mode={mode} setCorrect={setCorrect} setLives={setLives} setHints={setHints} resetMode={resetMode}/>
    </div>
  )
}

export default GameInterface