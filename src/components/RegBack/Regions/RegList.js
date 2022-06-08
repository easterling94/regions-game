import RegItem from './RegItem';
import styles from './regList.module.css';

const RegList = ( {regList, regDel, regEdit} ) => {
  return (
    <div className={styles.regList}>
      {
        regList.length !== 0 ?
        regList.map((el) => 
          <RegItem key={el.id} el={el} regDel={regDel} regEdit={regEdit}/>) : 'No regions to show'
      }
    </div>
  )
}

export default RegList