import { AiOutlineQuestionCircle, AiOutlineUndo } from 'react-icons/ai'
import styles from './gamefooter.module.css';

const GameFooter = ({mode, resetMode}) => {
  const showHint = () => {
    console.log('test')
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