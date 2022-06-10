import GameHeader from './GameHeader/GameHeader.js'
import GameBoard from './GameBoard/GameBoard.js'
import GameFooter from './GameFooter/GameFooter'
import { useState, useEffect } from 'react';
import styles from './gameinterface.module.css'

const GameInterface = ( {regions, mode} ) => {
  const infinitySign = '\u221e';
  const [correct, setCorrect] = useState('');
  const [lives, setLives] = useState('')
  const [hints, setHints] = useState('');

  useEffect(() => {
    setCorrect(0)
    setLives(mode === 'Exam' ? 10 : infinitySign);
    setHints(mode === 'Exam' ? 10 : infinitySign);
  },[])

  return (
    <div className={styles.wrapper}>
      <GameHeader mode={mode} correct={correct} lives={lives} hints={hints}/>
      <GameBoard mode={mode} regions={regions} setCorrect={setCorrect} setLives={setLives} setHints={setHints} correct={correct} lives={lives} hints={hints}/>
      <GameFooter mode={mode} setCorrect={setCorrect} setLives={setLives} setHints={setHints}/>
    </div>
  )
}

export default GameInterface