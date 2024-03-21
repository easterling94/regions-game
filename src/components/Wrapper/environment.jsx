import ReactDOM from 'react-dom';
import styles from './wrapper.module.scss';

const backBtn = document.getElementById('environment');

export const Environment = ({ showEnvironment, environment }) => ReactDOM.createPortal(
  <button className={`${styles.btn} ${styles.environment}`} onClick={showEnvironment}>
    <p>{environment}</p>
  </button>,
  backBtn
);
