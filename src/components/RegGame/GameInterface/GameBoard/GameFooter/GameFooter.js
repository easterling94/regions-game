import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai'
import styles from './gamefooter.module.css';

const GameFooter = ({mode, setHints, hints, resetMode, currentRegion, showHintModal}) => {
  const showHint = () => {
    if(hints === 0) return;
    if (mode === 'Training') {
      showHintModal(currentRegion);
      return;
    }
    showHintModal(currentRegion);
    setHints(hints - 1)
  }
  return (
    <section className={styles.footer}>
      <div className={styles.info}>
        <p>Game mode:</p>
        <p>{mode}</p>
      </div>
      <div className={styles.info}>
        <p>Hint:</p>
        <button className={`${styles.btn} ${styles.hint}`}>
          <AiOutlineQuestionCircle size={20} onClick={showHint}/>
        </button>
      </div>
      <div className={styles.info}>
        <p>Reset:</p>
        <button className={`${styles.btn} ${styles.reset}`}>
          <AiOutlineUndo size={20} onClick={resetMode}/>
        </button>
      </div>
    </section>
  )
}

export default GameFooter