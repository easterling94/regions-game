import styles from './gamemode.module.css'

const GameMode = ({ setModeF }) => {
  return (
    <div className={styles.wrapperMain}>
      <h1>
        Welcome to the Region's game!
      </h1>
      <p>
        You will be able to practice in learning regions names-codes pairs.</p>
      <p>
        Choose your game mode and start playing!
      </p>
      <section className={styles.wrapperMode}>
        <div id='Training' className={styles.mode} onClick={(e) => setModeF(e)}>
          <h4>Training</h4>
          <ul>
            <li>Unlimited lives</li>
            <li>Unlimited hints</li>
            <li>Unlimited time</li>
          </ul>
        </div>
        <div id='Exam' className={styles.mode} onClick={(e) => setModeF(e)}>
          <h4>Exam</h4>
          <ul>
            <li>3 lives</li>
            <li>3 hints</li>
            <li>Time limeted by 3 minutes</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default GameMode