import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useAppDispatch } from '../../services/store';
import { deleteRegionsData, editRegionsData } from '../../services/thunks/regionsThunks';
import regListStyles from './regList.module.css';

function RegItem({ el }) {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteRegionsData(el));
  };
  const handleEdit = () => {
    dispatch(editRegionsData(el));
  };
  return (
    <div className={regListStyles.regContainer} id={el.id}>
      <div className={regListStyles.regInfo}>
        <h3>{el.REGION_NAME}</h3>
        <hr />
        <div>
          Коды региона:
          <div className={regListStyles.codes}>
            {el.REGION_CODES.map((el) => <div key={el} className={regListStyles.codeItem}>{el}</div>)}
          </div>
        </div>
        <hr />

      </div>
      <div className={regListStyles.btnGroup}>
        <button onClick={handleDelete} className={`${regListStyles.btn} ${regListStyles.btnDelete}`}>
          <AiFillDelete />
        </button>
        <button onClick={handleEdit} className={`${regListStyles.btn} ${regListStyles.btnEdite}`}><AiFillEdit /></button>
      </div>
    </div>
  );
}

export default RegItem;
