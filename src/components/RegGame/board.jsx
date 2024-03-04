import { useState, useEffect } from 'react';
import { GameFooter } from './footer';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { setCorrect, setLives } from '../../services/slices/gameSlice';
import { prepareBoard, checkAnswers } from '../../utils/gameLogic';
import { Answer } from './answer';
import styles from './board.module.scss';

function GameBoard() {
  const { regions } = useAppSelector((store) => store.regions);
  const {
    ans1,
    ans2,
    ans3,
    ans4,
    next
  } = useAppSelector((store) => store.game.board);
  const dispatch = useAppDispatch();

  const [codesToAnswer, setCodesToAnswer] = useState([]);
  const [randomRegion, setRandomRegion] = useState({});
  const [restRegions, setRestRegions] = useState(null);

  function usePrepareBoard(regionsInitial, regionsTrimmed) {
    const result = prepareBoard(regionsInitial, regionsTrimmed);
    setCodesToAnswer(result.codesToAnswer);
    setRandomRegion(result.randomRegion);
    setRestRegions(result.restRegions);
  }

  useEffect(() => {
    usePrepareBoard(regions, regions);
  }, []);

  const getNextQuestion = () => {
    if (!next) return;
    const answerArray = [ans1, ans2, ans3, ans4];
    const answerCheck = checkAnswers(randomRegion, answerArray, codesToAnswer);
    usePrepareBoard(regions, restRegions);
    if (answerCheck) {
      dispatch(setCorrect());
      return;
    }
    dispatch(setLives());
    return;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <div className={`${styles.box} ${styles.question}`}>
          Выберете все подходящие номера для:
          <br />
          {randomRegion.regName}
        </div>
        <Answer id="1" value={codesToAnswer[0]} />
        <Answer id="2" value={codesToAnswer[1]} />
        <Answer id="3" value={codesToAnswer[2]} />
        <Answer id="4" value={codesToAnswer[3]} />
        <div className={`${next ? styles.nextEnable : styles.nextDisable}`} onClick={getNextQuestion}>Submit</div>
      </div>
      <GameFooter />
    </div>
  );
}

export default GameBoard;
