import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styles from './gamefooter.module.css';

export function GameFooter({
  setHints, hints, currentRegion, showHintModal,
}) {
  const navigate = useNavigate();
  const showHint = () => {
    if (hints === 0) return;
    showHintModal(currentRegion);
    setHints(hints - 1);
  };
  const resetGame = () => {
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
