import { useEffect } from 'react';
import GameHeader from './header.jsx';
import GameBoard from './board.jsx';
import FinalStats from './stats.jsx';
import styles from './interface.module.css';
import HintModal from './modal.jsx';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { setTimer } from '../../services/slices/gameSlice';
import { TIMER_END } from '../../utils/project_consts';

function Interface() {
  const dispatch = useAppDispatch();
  const { livesCount, isModalShown, timerLeft } = useAppSelector((store) => store.game);

  useEffect(() => {
    if (timerLeft === TIMER_END) return;
    if (livesCount <= 0) return;
    const zero = '0';
    let currentTime = timerLeft.split(':').map((el) => Number(el));
    let nextTime;
    if (currentTime[1] === 0) {
      nextTime = [currentTime[0] - 1, currentTime[1] = 59];
    } else {
      nextTime = [currentTime[0], currentTime[1] - 1];
    }
    currentTime = nextTime.map((el) => (el < 10 ? `${zero}${el.toString()}` : el.toString()));
    setTimeout(() => dispatch(setTimer(currentTime.join(':'))), 1000);
  }, [timerLeft]);

  return (
    <div className={styles.wrapper}>
      <GameHeader />
      {livesCount <= 0 || timerLeft === TIMER_END
        ? <FinalStats />
        : <GameBoard />}
      {
        isModalShown
          ? <HintModal />
          : null
      }
    </div>
  );
}

export default Interface;
