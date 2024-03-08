import RegItem from './RegItem';
import { useAppSelector } from '../../services/store';
import { LOAD_STATUSES } from '../../utils/sharedTypes';
import styles from './regList.module.css';

function RegList() {
  const { status, regions } = useAppSelector((store) => store.regions);
  return (
    <div className={styles.regList}>
      {
        status === LOAD_STATUSES.SUCCESS
          ? regions.map((el) => <RegItem key={el.id} el={el} />) : 'Произошло немыслемое...'
      }
    </div>
  );
}

export default RegList;
