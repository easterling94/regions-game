import { useState, useEffect } from 'react';
import GameMode from './GameMode/GameMode';
import GameInterface from './GameInterface/GameInterface';
import styles from './reggame.module.css'

const RegGame = () => {
  const [mode, setMode] = useState('');
  const [regions, setRegions] = useState([]);

  const setModeF = (e) => {
    setMode(e.currentTarget.id)
  }
  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await getData();
      setRegions(dataFetched);
    };
    fetchData();
  },[]);

  const getData = async () => {
    let regions = await fetch('http://localhost:5001/regions')
    .then(res => res.json())
    return regions;
  }

  const resetMode = () => {
    setMode('')
  }
  
  return (
    <div className={styles.body}>
      {mode === '' ? <GameMode setModeF={setModeF}/> : <GameInterface mode={mode} regions={regions} resetMode={resetMode}/>}
    </div>
  )
}

export default RegGame