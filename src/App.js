import RegForm from './components/RegForm/RegForm';
import RegList from './components/Regions/RegList';
import { useState } from 'react';


function App() {
  const [regList, setRegList] = useState([
    {
      id: 1,
      regName: 'Республика Адыгея',
      currRegCode: ['01', '101'],
      futRegCode: []
    },
    {
      id: 2,
      regName: 'Республика Башкортостан',
      currRegCode: ['02', '102', '702'],
      futRegCode: []
    },
  ]);

  const changeRegList = (newReg) => {
    setRegList([...regList, newReg])
  }

  const regDel = () => {
    console.log('hi')
  }

  return (
    <>
    <RegForm regList={regList} changeRegList={changeRegList}/>
    <RegList regList={regList} regDel={regDel}/>
  </>
  );
}

export default App;
