import { useState, useEffect } from 'react';
import Interface from './interface';
import styles from './reggame.module.css';
import { DATA_IF_SERVER_FAILS } from '../../utils/db_static';
import { IS_PRODUCTION, IS_DEV, IS_PROD } from '../../utils/project_consts';

function RegGame() {
  const [regions, setRegions] = useState(null);

  useEffect(() => {
    if (IS_PRODUCTION === IS_PROD) {
      const fetchData = async () => {
        const dataFetched = await getData();
        setRegions(dataFetched);
      };
      fetchData();
    } else if (IS_PRODUCTION === IS_DEV) {
      setRegions(DATA_IF_SERVER_FAILS.regions);
    }
  }, []);

  const getData = async () => {
    let regions;
    await fetch('http://localhost:5001/regions')
      .then((res) => regions = res.json())
      .catch(() => regions = DATA_IF_SERVER_FAILS.regions);
    return regions;
  };

  return (
    <div className={styles.body}>
      <Interface />
    </div>
  );
}

export default RegGame;
