import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai'
import styles from './gamefooter.module.css';

const GameFooter = ({mode}) => {
  return (
    <section className={styles.footer}>
      <div>Game mode: {mode}</div>
      <div>
        Hint:
        <button className={`${styles.btn} ${styles.hint}`}>
          <AiOutlineQuestionCircle size={20} />
        </button>
      </div>
      <div>
        Reset:
        <button className={`${styles.btn} ${styles.reset}`}>
          <AiOutlineUndo size={20} />
        </button>
      </div>
    </section>
  )
}

export default GameFooter