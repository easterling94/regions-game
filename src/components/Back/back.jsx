import ReactDOM from 'react-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './back.module.css';

const backBtn = document.getElementById('back');

export const Back = ({ resetGame }) => ReactDOM.createPortal(
  <button className={styles.btn} onClick={resetGame}>
    <AiOutlineArrowLeft size={20} />
  </button>,
  backBtn
);
