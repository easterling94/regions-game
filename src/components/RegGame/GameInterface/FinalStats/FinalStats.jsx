import { AiOutlineUndo } from 'react-icons/ai';
import styles from './finalstats.module.css';

function FinalStats({
  correct, lives, hints, timer, examStartingTime, mode, resetMode,
}) {
  const examTime = (timer, examStartingTime) => {
    const timePlayed = timer.split(':').map((el) => Number(el));
    const timeLimit = examStartingTime.split(':').map((el) => Number(el));
    const timeDifference = (timeLimit[0] * 60 + timeLimit[1]) - (timePlayed[0] * 60 + timePlayed[1]);

    const timeMinutes = Math.floor(timeDifference / 60) < 10 ? `0${Math.floor(timeDifference / 60)}` : Math.floor(timeDifference / 60) < 10;

    const timeSeconds = (timeDifference - timeMinutes * 60) < 10 ? `0${timeDifference - timeMinutes * 60}` : timeDifference - timeMinutes * 60;
    const timeFormated = `${timeMinutes}:${timeSeconds}`;

    return timeFormated;
  };
  return (
    <div className={styles.wrapper}>
      <h2>Congratulations!</h2>
      <h3>{mode === 'Exam' ? 'That is the end of the exam.' : 'You have tried all the regions!'}</h3>
      <h4>Your game's statistics are:</h4>
      <p>
        Total right answers:
        {correct}
      </p>
      <p>
        Total lives left:
        {lives}
        {' '}
        out of 10
      </p>
      <p>
        Hints used:
        {mode === 'Exam' ? 10 - hints : hints}
        {' '}
        out of 10
      </p>
      <p>
        Time played:
        {mode === 'Exam' ? examTime(timer, examStartingTime) : timer}
      </p>
      <h2>Ready for another round?</h2>
      <h3>
        Hit Reset button:
        <button onClick={resetMode}><AiOutlineUndo /></button>
      </h3>
    </div>
  );
}

export default FinalStats;
