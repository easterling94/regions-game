import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { reset } from '../../services/slices/gameSlice';
import { BUTTON_TYPES, ENV_CONTENT } from './config';
import styles from './wrapper.module.scss';

export function Button({ type }) {
  const [isHover, setIshover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { environment } = useAppSelector((store) => store.general);
  const classes = {
    btn: isHover ? styles.btnHover : styles.btn,
    btnType: type === BUTTON_TYPES.back ? styles.back : styles.environment,
    content: isHover ? styles.contentHover : styles.content,
  };
  const content = type === BUTTON_TYPES.back ? 'Назад' : ENV_CONTENT[environment];
  const handleMouse = () => {
    setIshover(!isHover);
  };
  const handleClick = () => {
    switch (type) {
      case BUTTON_TYPES.back:
        dispatch(reset());
        navigate('/');
        break;
      case BUTTON_TYPES.environment:
        break;
      default:
        break;
    }
  };
  return (
    <button className={`${classes.btn} ${classes.btnType}`} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick}>
      <p className={classes.content}>{content}</p>
    </button>
  );
}
