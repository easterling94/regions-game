import RegForm from './RegForm/RegForm';
import RegList from './Regions/RegList';
import { useState, useEffect } from 'react';

function RegBack() {
  
  const [regList, setRegList] = useState([]);
  
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

  const url = "http://localhost:5001/regions";

  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await getData();
      setRegList(dataFetched);
    };
    fetchData();
    
  }, []);
  const getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };

  const changeRegList = async (newReg) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newReg)
    })
    setRegList([...regList, newReg])
  }

  const regDel = async (e) => {
    let region;
    switch (e.target.nodeName) {
      case 'BUTTON':
        region = Number(e.target.parentElement.parentElement.id);
        break;
      case 'svg':
        region = Number(e.target.parentElement.parentElement.parentElement.id);
        break;
      case 'path':
        region = Number(e.target.parentElement.parentElement.parentElement.parentElement.id);
        break;
    }
    await fetch(`${url}/${region}`, {
      method: 'DELETE'
    });
    const restRegions = [...regList].filter((el) => el.id !== region);
    setRegList(restRegions); 
  }

  return (
    <>
      <RegForm regList={regList} changeRegList={changeRegList} setRegStateF={setRegStateF} regState={regState}/>
      <RegList regList={regList} regDel={regDel}/>
    </>
  );
}

export default RegBack