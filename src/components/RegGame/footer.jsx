import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/store';
import { setHint, reset } from '../../services/slices/gameSlice';
import styles from './footer.module.css';

export function GameFooter({
  setHints, hints, currentRegion, showHintModal,
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const showHint = () => {
    if (hints === 0) return;
    showHintModal(currentRegion);
    setHints(hints - 1);
    dispatch(setHint());
  };
  const resetGame = () => {
    dispatch(reset());
    navigate('/');
  };
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <p>Hint:</p>
        <button className={`${styles.btn} ${styles.hint}`}>
          <AiOutlineQuestionCircle size={20} onClick={showHint} />
        </button>
      </div>
      <div className={styles.info}>
        <p>Reset:</p>
        <button className={`${styles.btn} ${styles.reset}`}>
          <AiOutlineUndo size={20} onClick={resetGame} />
        </button>
      </div>
    </section>
  );
}
