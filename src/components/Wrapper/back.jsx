import ReactDOM from 'react-dom';
import styles from './wrapper.module.scss';

const backBtn = document.getElementById('back');

export const Back = ({ resetGame }) => ReactDOM.createPortal(
  <button className={`${styles.btn} ${styles.back}`} onClick={resetGame}>
    <p>Назад</p>
  </button>,
  backBtn
);
