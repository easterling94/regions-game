import RegItem from './RegItem'
import './regList.css'

const RegList = ( {regList, regDel} ) => {
  return (
    <div className='regList'>
      {
        regList.length !== 0 ?
        regList.map((el) => 
          <RegItem key={el.id} el={el} regDel={regDel}/>) : 'No regions to show'
      }
    </div>
  )
}

export default RegList