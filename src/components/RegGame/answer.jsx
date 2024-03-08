import { useAppDispatch, useAppSelector } from '../../services/store';
import { changeAnswerThunk, changeNextThunk } from '../../services/thunks/gameThunks';
import styles from './board.module.scss';

export function Answer({ id, value }) {
  const dispatch = useAppDispatch();
  const { board } = useAppSelector((store) => store.game);
  const manageBoard = () => {
    dispatch(changeAnswerThunk(id, value));
    dispatch(changeNextThunk());
  };
  return (
    <div
      className={`${board[`ans${id}`] === '' ? styles.answerIdle : styles.answerChosen}`}
      onClick={manageBoard}
    >
      {value}
    </div>
  );
}
