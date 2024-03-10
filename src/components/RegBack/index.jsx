import { useState, useEffect } from 'react';
import { DATA_IF_SERVER_FAILS } from '../../utils/db_static';
import RegForm from './RegForm';
import RegList from './RegList';
import { IS_PRODUCTION, IS_DEV, IS_PROD } from '../../utils/project_consts';

function RegBack() {
  const [regList, setRegList] = useState([]);

  const [regState, setRegState] = useState(
    {
      id: '',
      regName: '',
      regCodes: '',
    },
  );

  const url = 'http://localhost:5001/regions';

  const getData = async (el) => {
    let response;
    if (el === undefined) {
      await fetch(url)
        .then((res) => response = res.json())
        .catch(() => response = DATA_IF_SERVER_FAILS);
    } else {
      await fetch(`${url}/${el}`)
        .then((res) => response = res.json())
        .catch(() => response = DATA_IF_SERVER_FAILS);
    }
    return response;
  };

  useEffect(() => {
    if (IS_PRODUCTION === IS_PROD) {
      const fetchData = async () => {
        const dataFetched = await getData();
        setRegList(dataFetched);
      };
      fetchData();
    }
    if (IS_PRODUCTION === IS_DEV) {
      setRegList(DATA_IF_SERVER_FAILS.regions);
    }
  }, []);

  const regAdd = async (newReg) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newReg),
    });
    setRegList([...regList, newReg]);
  };

  const regDel = async (e) => {

  };

  const regEdit = async (e) => {

  };

  return (
    <>
      <RegForm />
      <RegList />
    </>
  );
}

export default RegBack;
