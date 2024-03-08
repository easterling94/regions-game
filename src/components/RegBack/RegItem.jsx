import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import regListStyles from './regList.module.css';

function RegItem({ el }) {
  return (
    <div className={regListStyles.regContainer} id={el.id}>
      <div className={regListStyles.regInfo}>
        <h3>{el.regName}</h3>
        <hr />
        <div>
          Коды региона:
          <div className={regListStyles.codes}>
            {el.currRegCode.map((el) => <div key={el} className={regListStyles.codeItem}>{el}</div>)}
          </div>
        </div>
        <hr />

      </div>
      <div className={regListStyles.btnGroup}>
        <button className={`${regListStyles.btn} ${regListStyles.btnDelete}`}>
          <AiFillDelete />
        </button>
        <button className={`${regListStyles.btn} ${regListStyles.btnEdite}`}><AiFillEdit /></button>
      </div>
    </div>
  );
}

export default RegItem;
