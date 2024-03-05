import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../services/store';
import { setModal } from '../../services/slices/gameSlice';
import styles from './modal.module.css';

const modalId = document.getElementById('modal');

const HintModal = ({ currentRegion }) => {
  const dispatch = useAppDispatch();
  const closeHint = () => {
    dispatch(setModal());
  };
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h4 className={styles.regName}>{currentRegion.regName}</h4>
        <p className={styles.curRegs}>Коды у данного региона:</p>
        <div className={styles.codes}>
          {currentRegion.currRegCode.map((el, i) => <div key={i} className={styles.code}>{el}</div>)}
        </div>
        <div className={styles.btnWrapper}>
          <button onClick={closeHint} className={styles.btn}>Close hint</button>
        </div>
      </div>
    </div>,
    modalId
  );
};

export default HintModal;
