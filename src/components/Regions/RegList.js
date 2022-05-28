import RegItem from './RegItem'
import './regList.css'

const RegList = ( {regList, regDel} ) => {
  return (
    <div className='regList'>
      {
        regList.map((el) => 
          <RegItem key={el.id} el={el} regDel={regDel}/>)
      }
    </div>
  )
}

export default RegList