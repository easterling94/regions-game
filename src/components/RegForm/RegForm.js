import { useState } from 'react'
import Header from './Header';
import './regForm.css';

const RegForm = ({regList, changeRegList}) => {
  const [btnColor, changeColor] = useState(
    {
      regName: false,
      currRegCode: false,
      futRegCode: false,
    },
  );

  const changeColorF = (e) => {
    const target = e.target.id;
    if (e.target.value === '') {
      changeColor({...btnColor, [target]: false});
    } else {
      changeColor({...btnColor, [target]: e.target.value});
    }
  }

  const addItem = (event) => {
    event.preventDefault();
    if(!btnColor.regName || !btnColor.currRegCode) {
      alert('Please fill in at least first two fields');
      return;
    }
    const regListLength = regList.length + 1;
    const currRegList = btnColor.currRegCode.replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== ''));
    const futRegList = btnColor.futRegCode ? btnColor.futRegCode.replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== '')) : [];
    
    const newReg = {
      id: regListLength, 
      regName: btnColor.regName, 
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
      <Header />
      <form onSubmit={addItem}>
        <div className='regInput'>
          <label>Insert Region Name</label>
          <input id='regName' type='text' placeholder='Region name' onChange={(e) => changeColorF(e)}/>
        </div>
        <div className='regInput'>
          <label>Insert Region Code(s)</label>
          <input id='currRegCode' type='text' placeholder='Current codes divided by ","' onChange={(e) => changeColorF(e)}/>
        </div>
        <div className='regInput'>
          <label>Insert Future Code(s) if known</label>
          <input id='futRegCode' type='text' placeholder='Future codes divided by ","' onChange={(e) => changeColorF(e)}/>
        </div>
        <input type='submit' value='Save' className='btn btn-save' style={btnColor.regName && btnColor.currRegCode ? {backgroundColor: colors.filled} : {backgroundColor: colors.notFilled}}/>
      </form>
      </div>
  )
}

export default RegForm