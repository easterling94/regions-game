import RegFormInput from './RegFormInput';
import styles from './regForm.module.css';

const RegForm = ({setRegStateF, regState, formSubmit}) => {

  const btnBackground = (regState.regName && regState.currRegCode) ? 'filled' : 'notFilled';
  const colors = {
    filled: '#00B1E1',
    notFilled: '#99B1E1'
  };

  return (
    <div className={styles.regNew}>
      <h1>Region Change Form</h1>
      <form onSubmit={formSubmit}>
        <RegFormInput value={regState.regName} lbl='Insert Region Name' id='regName' plhldr='Region name' setRegStateF={setRegStateF}/>
        <RegFormInput value={regState.currRegCode} lbl='Insert Region Code(s)' id='currRegCode' plhldr='Current codes divided by ","' setRegStateF={setRegStateF}/>
        <input type='submit' value='Save' className={styles.btn} style={{backgroundColor: colors[btnBackground]}}/>
      </form>
    </div>
  )
}

export default RegForm