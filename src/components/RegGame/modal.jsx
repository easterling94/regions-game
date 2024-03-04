import { ReactDOM } from 'react';
import styles from './modal.module.css';

const modalId = document.getElementById('modal');

function HintModal({ currentRegion, closeHintModal }) {
  ReactDOM.createPortal(
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
    </div>,
    modalId
  );
}

export default HintModal;
