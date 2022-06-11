import styles from './finalstats.module.css';

const FinalStats = ({correct, lives, hints, timer, examStartingTime, mode}) => {
  const examTime = (timer, examStartingTime) => {
    let timePlayed = timer.split(':').map((el) => Number(el));
    let timeLimit = examStartingTime.split(':').map((el) => Number(el));
    let timeDifference = (timeLimit[0] * 60 + timeLimit[1]) - (timePlayed[0] * 60 + timePlayed[1]);

    let timeMinutes = Math.floor(timeDifference / 60) < 10 ? `0${Math.floor(timeDifference / 60)}` : Math.floor(timeDifference / 60) < 10;

    let timeSeconds = (timeDifference - timeMinutes * 60) < 10 ? `0${timeDifference - timeMinutes * 60}` : timeDifference - timeMinutes * 60;
    let timeFormated = `${timeMinutes}:${timeSeconds}`
    
    return timeFormated;
  }
  return (
    <div className={styles.wrapper}>
      <h2>Congratulations!</h2> 
      <h3>{mode === 'Exam' ? 'That is the end of exam.' : 'You have tried all the regions!'}</h3>
      <h3>Your game's statistics are:</h3>
      <p>Total right answers: {correct}</p>
      <p>Total lives left: {lives}</p>
      <p>Hints used: {hints}</p>
      <p>Time played: {mode === 'Exam' ? examTime(timer, examStartingTime) : timer}</p>
      <h2>Ready for another round?</h2>
      <h3>Hit Reset button below</h3>
    </div>
  )
}

export default FinalStats