import GameHeader from './GameHeader/GameHeader.js'
import GameBoard from './GameBoard/GameBoard.js'
import GameFooter from './GameFooter/GameFooter'
import styles from './gameinterface.module.css'

const GameInterface = ( {regions, mode} ) => {
  return (
    <div className={styles.wrapper}>
      <GameHeader mode={mode}/>
      <GameBoard regions={regions}/>
      <GameFooter mode={mode}/>
    </div>
  )
}

export default GameInterface