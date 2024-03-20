import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { setHint, setModal } from '../../services/slices/gameSlice';
import styles from './footer.module.css';

export function GameFooter() {
  const { hintsCount } = useAppSelector((store) => store.game);
  const dispatch = useAppDispatch();
  const showHint = () => {
    if (hintsCount === 0) return;
    dispatch(setHint());
    dispatch(setModal());
  };
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p>Подсказка:</p>
        <button className={styles.btn}>
          <AiOutlineQuestionCircle size={20} onClick={showHint} />
        </button>
      </div>
    </section>
  );
}
