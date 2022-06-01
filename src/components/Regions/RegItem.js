import regListStyles from './regList.module.css';

const RegItem = ( {el, regDel} ) => {
  return (
    <div className={regListStyles.regContainer} id={el.id}>
      <div className={regListStyles.regInfo}>
        <h3>{el.regName}</h3>
        <hr/>
        <div>Current codes:
          <div className={regListStyles.codes}>
            {el.currRegCode.map((el) => <div key={el} className={regListStyles.codeItem}>{el}</div>)}
          </div>
        </div>
        <hr/>
        <div>Future codes:
          <div className={regListStyles.codes}>
            {el.futRegCode.length? el.futRegCode.map((el) => <div key={el} className={regListStyles.codeItem}>{el}</div>) : '-'}
          </div>
        </div>
      </div>
      <div className={regListStyles.btnGroup}>
        <button className={`${regListStyles.btn} ${regListStyles.btnDelete}`} onClick={(e) => regDel(e)}>
          X
        </button>
        <button className={`${regListStyles.btn} ${regListStyles.btnEdite}`}>V</button>
      </div>
    </div>
  )
}

export default RegItem