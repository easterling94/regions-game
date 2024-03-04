import { AiOutlineUndo } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { reset } from '../../services/slices/gameSlice';
import styles from './stats.module.css';

function FinalStats() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goBackToMain = () => {
    dispatch(reset());
    navigate('/');
  };
  const { correctCount, livesCount, hintsCount } = useAppSelector((store) => store.game);
  return (
    <div className={styles.wrapper}>
      <h2>Игра закончилась!</h2>
      <h4>Статистика по игре:</h4>
      <p>
        {`Всего верно угаданных регионов: ${correctCount}`}
      </p>
      <p>
        {`Осталось жизней: ${livesCount} из 10`}
      </p>
      <p>
        {`Подсказок использовано: ${hintsCount} из 10`}
      </p>
      <h3>
        Вернуться в главное меню:
        <button onClick={goBackToMain}><AiOutlineUndo /></button>
      </h3>
    </div>
  );
}

export default FinalStats;
