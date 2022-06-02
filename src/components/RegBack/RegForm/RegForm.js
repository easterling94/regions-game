import { useState } from 'react'
import './regForm.css';

const RegForm = ({regList, changeRegList}) => {
  const [regState, setRegState] = useState(
    {
      regName: false,
      currRegCode: false,
      futRegCode: false,
    },
  );

  const setRegStateF = (e) => {
    const target = e.target.id;
    if (e.target.value === '') {
      setRegState({...regState, [target]: false});
    } else {
      setRegState({...regState, [target]: e.target.value});
    }
  }

  const addItem = (event) => {
    event.preventDefault();
    if(!regState.regName || !regState.currRegCode) {
      alert('Please fill in at least first two fields');
      return;
    }
    const regListLength = regList.length + 1;
    const currRegList = regState.currRegCode.replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== ''));
    const futRegList = regState.futRegCode ? regState.futRegCode.replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== '')) : [];
    
    const newReg = {
      id: regListLength, 
      regName: regState.regName, 
      currRegCode: currRegList, 
      futRegCode: futRegList
    };

    changeRegList(newReg);
  }

  const colors = {
    filled: '#00B1E1',
    notFilled: '#99B1E1'
  }

  return (
    <div className='regNew'>
      <h1>Region Change Form</h1>
      <form onSubmit={addItem}>
        <div className='regInput'>
          <label>Insert Region Name</label>
          <input id='regName' type='text' placeholder='Region name' onChange={(e) => setRegStateF(e)}/>
        </div>
        <div className='regInput'>
          <label>Insert Region Code(s)</label>
          <input id='currRegCode' type='text' placeholder='Current codes divided by ","' onChange={(e) => setRegStateF(e)}/>
        </div>
        <div className='regInput'>
          <label>Insert Future Code(s) if known</label>
          <input id='futRegCode' type='text' placeholder='Future codes divided by ","' onChange={(e) => setRegStateF(e)}/>
        </div>
        <input type='submit' value='Save' className='btn btn-save' style={regState.regName && regState.currRegCode ? {backgroundColor: colors.filled} : {backgroundColor: colors.notFilled}}/>
      </form>
    </div>
  )
}

export default RegForm