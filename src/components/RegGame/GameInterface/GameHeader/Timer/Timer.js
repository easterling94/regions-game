import { useState, useEffect } from 'react';
import styles from './timer.module.css'

const TimerBackward = ({mode}) => {
  const [timer, setTimer] = useState('');
  const limit = mode === 'Exam' ? '00:00' : '10:00';

  useEffect(() => {
    setTimer(mode === 'Exam' ? '03:00' : '00:00');
  },[])

  useEffect(() => {
    if (timer === limit) return;
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

  return (
    <div className={`${styles.element} ${styles.timer}`}>{timer}</div>
  )
}

export default TimerBackward