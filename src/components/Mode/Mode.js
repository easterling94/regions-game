import mode from './mode.module.css'
const Mode = ({modeState, changeMode}) => {
  return (
    <div className={mode.wrapper}>
      <p>Registration mode</p>
      <div className={mode.toggle} onClick={changeMode}>
        <div className={mode.circle} style={modeState ? {left: '0px'} : {left: '40px'}}></div>
      </div>
      <p>Gaming mode</p>
    </div>
  )
}

export default Mode