import RegForm from './components/RegForm/RegForm';
import RegList from './components/Regions/RegList';
import { useState, useEffect } from 'react';


function App() {
  const [regList, setRegList] = useState([]);

  const url = "http://localhost:5001/regions"

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
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newReg)
    })
    const data = res.json()
    setRegList([...regList, newReg])
  }

  const regDel = async (e) => {
    const region = Number(e.target.parentElement.id)
    await fetch(`${url}/${region}`, {
      method: 'DELETE'
    })
    const restRegions = [...regList].filter((el) => el.id !== region);
    setRegList(restRegions); // extra work, should be rebuiled like updating component
  }

  return (
    <>
      <RegForm regList={regList} changeRegList={changeRegList}/>
      <RegList regList={regList} regDel={regDel}/>
    </>
  );
}

export default App;
