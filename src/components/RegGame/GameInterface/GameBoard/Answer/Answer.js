import styles from './answer.module.css';
import { useState } from 'react';

const Answer = ({answer}) => {
  const [state, setState] = useState(false);
  const changeState = () => {
    setState(!state);
  }
  return (
    <div className={styles.box} onClick={changeState} style={state ? {backgroundColor: 'grey'} : {backgroundColor: 'white'}}>{answer}</div>
  )
}

export default Answer