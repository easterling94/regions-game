const RegItem = ( {el, regDel} ) => {
  return (
    <div className='regContainer' id={el.id}>
      <div className='regInfo'>
        <h3>{el.regName}</h3>
        <hr/>
        <div>Current codes:
          <div className='codes'>
            {el.currRegCode.map((el) => <div key={el} className='codeItem'>{el}</div>)}
          </div>
        </div>
        <hr/>
        <div>Future codes:
          <div className='codes'>
            {el.futRegCode.map((el) => <div key={el} className='codeItem'>{el}</div>)}
          </div>
        </div>
      </div>
      <button className='regDelete' onClick={(e) => regDel(e)}>
        X
      </button>
    </div>
  )
}

export default RegItem