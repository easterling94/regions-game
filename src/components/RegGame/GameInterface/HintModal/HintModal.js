import styles from './hintmodal.module.css'

const HintModal = ({currentRegion, closeHintModal}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h4 className={styles.regName}>{currentRegion.regName}</h4>
        <p className={styles.curRegs}>Current region codes are:</p>
        <div className={styles.codes}>
            {currentRegion.currRegCode.map((el, i) => <div key={i} className={styles.code}>{el}</div>)}
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={closeHintModal} className={styles.btn}>Close hint</button>
        </div>
      </div>
    </div>
  )
}

export default HintModal