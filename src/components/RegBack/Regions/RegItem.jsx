import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import regListStyles from './regList.module.css';

function RegItem({ el, regDel, regEdit }) {
  return (
    <div className={regListStyles.regContainer} id={el.id}>
      <div className={regListStyles.regInfo}>
        <h3>{el.regName}</h3>
        <hr />
        <div>
          Current codes:
          <div className={regListStyles.codes}>
            {el.currRegCode.map((el) => <div key={el} className={regListStyles.codeItem}>{el}</div>)}
          </div>
        </div>
        <hr />

      </div>
      <div className={regListStyles.btnGroup}>
        <button className={`${regListStyles.btn} ${regListStyles.btnDelete}`} onClick={(e) => regDel(e)}>
          <AiFillDelete />
        </button>
        <button className={`${regListStyles.btn} ${regListStyles.btnEdite}`} onClick={(e) => regEdit(e)}><AiFillEdit /></button>
      </div>
    </div>
  );
}

export default RegItem;