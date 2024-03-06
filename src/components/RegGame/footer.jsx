import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { reset, setHint, setModal } from '../../services/slices/gameSlice';
import styles from './footer.module.css';

export function GameFooter() {
  const { hintsCount } = useAppSelector((store) => store.game);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const showHint = () => {
    if (hintsCount === 0) return;
    dispatch(setHint());
    dispatch(setModal());
  };
  const resetGame = () => {
    dispatch(reset());
    navigate('/');
  };
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p>Подсказка:</p>
        <button className={`${styles.btn} ${styles.hint}`}>
          <AiOutlineQuestionCircle size={20} onClick={showHint} />
        </button>
      </div>
      <div className={styles.info}>
        <p>На главную:</p>
        <button className={`${styles.btn} ${styles.reset}`}>
          <AiOutlineUndo size={20} onClick={resetGame} />
        </button>
      </div>
    </section>
  );
}
