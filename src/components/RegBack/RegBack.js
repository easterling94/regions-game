import RegForm from './RegForm/RegForm';
import RegList from './Regions/RegList';
import { useState, useEffect } from 'react';

function RegBack() {
  
  const [regList, setRegList] = useState([]);

  const [regState, setRegState] = useState(
    {
      id: '',
      regName: '',
      currRegCode: '',
      futRegCode: ''
    },
  );

  const url = "http://localhost:5001/regions";

  const setRegStateF = (e) => {
    const target = e.target.id;
    if (e.target.value === '') {
      setRegState({...regState, [target]: ''});
    } else {
      setRegState({...regState, [target]: e.target.value});
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await getData();
      setRegList(dataFetched);
    };
    fetchData();
    
  }, []);

  const getData = async (el) => {
    if (el === undefined) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } else {
      let response = await fetch(`${url}/${el}`);
      let data = await response.json();
      return data;
    }
  };

  const chosenElement = (e) => {
    let el;
    switch (e.target.nodeName) {
      case 'BUTTON':
        el = Number(e.target.parentElement.parentElement.id);
        break;
      case 'svg':
        el = Number(e.target.parentElement.parentElement.parentElement.id);
        break;
      case 'path':
        el = Number(e.target.parentElement.parentElement.parentElement.parentElement.id);
        break;
      default:
        break;
    }
    return el;
  }

  const regAdd = async (newReg) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newReg)
    })
    setRegList([...regList, newReg]);
  }

  const regDel = async (e) => {
    const item = chosenElement(e);
    await fetch(`${url}/${item}`, {
      method: 'DELETE'
    });
    const restRegions = [...regList].filter((el) => el.id !== item);
    setRegList(restRegions); 
  }

  const regEdit = async (e) => {
    
    const item = chosenElement(e);
    const fetchData = await getData(item);
    
    const newReg = {
      id: fetchData.id,
      regName: fetchData.regName,
      currRegCode: fetchData.currRegCode,
      futRegCode: fetchData.futRegCode
    };
    setRegState(newReg);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if(!regState.regName || !regState.currRegCode) {
      alert('Please fill in at least first two fields');
      return;
    }

    const currRegList = regState.currRegCode.toString().replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== ''));
    const futRegList = regState.futRegCode ? regState.futRegCode.toString().replace(/[,!?.\\();:]/g, ' ').split(' ').filter((el) => (el !== ' ' && el !== '')) : [];

    if(regState.id) {
      let currList = [...regList];
      let newReg = {
        id: regState.id, 
        regName: regState.regName, 
        currRegCode: currRegList, 
        futRegCode: futRegList
      };
      fetch(`${url}/${regState.id}`, {
        method: 'PUT', 
        body: JSON.stringify(newReg),
        headers: {
          'Content-type': 'application/json'
        }
      });
      currList.splice(regState.id - 1, 1, newReg)
      setRegList(currList);
    } else {
      const regListLength = regList.length + 1;
      let newReg = {
        id: regListLength, 
        regName: regState.regName, 
        currRegCode: currRegList, 
        futRegCode: futRegList
      };
      regAdd(newReg);
    };
    setRegState({
      id: '',
      regName: '',
      currRegCode: '',
      futRegCode: ''
    })
  }

  return (
    <>
      <RegForm regList={regList} regAdd={regAdd} setRegStateF={setRegStateF} regState={regState} formSubmit={formSubmit}/>
      <RegList regList={regList} regDel={regDel} regEdit={regEdit}/>
    </>
  );
}

export default RegBack