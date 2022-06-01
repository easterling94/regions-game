import RegItem from './RegItem';
import regListStyles from './regList.module.css';

const RegList = ( {regList, regDel} ) => {
  return (
    <div className={regListStyles.regList}>
      {
        regList.length !== 0 ?
        regList.map((el) => 
          <RegItem key={el.id} el={el} regDel={regDel}/>) : 'No regions to show'
      }
    </div>
  )
}

export default RegList