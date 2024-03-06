import { useEffect } from 'react';
import GameHeader from './header.jsx';
import GameBoard from './board.jsx';
import FinalStats from './stats.jsx';
import styles from './interface.module.css';
import HintModal from './modal.jsx';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { setTimer } from '../../services/slices/gameSlice';
import { prepareTimer } from '../../utils/gameLogic';
import { TIMER_END } from '../../utils/project_consts';

function Interface() {
  const dispatch = useAppDispatch();
  const {
    livesCount, isModalShown, timerLeft, currentRegion
  } = useAppSelector((store) => store.game);

  useEffect(() => {
    if (timerLeft === TIMER_END) return;
    if (livesCount <= 0) return;
    setTimeout(() => {
      dispatch(setTimer(prepareTimer(timerLeft).join(':')));
    }, 1000);
  }, [timerLeft, currentRegion]);

  return (
    <div className={styles.wrapper}>
      <GameHeader />
      {livesCount <= 0 || timerLeft === TIMER_END
        ? <FinalStats />
        : <GameBoard />}
      {
        isModalShown && <HintModal currentRegion={currentRegion} />
      }
    </div>
  );
}

export default Interface;
