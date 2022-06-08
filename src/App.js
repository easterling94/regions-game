import Mode from './components/Mode/Mode'
import RegBack from './components/RegBack/RegBack';
import RegGame from './components/RegGame/RegGame'
import { useState } from 'react';


function App() {
  const [state, setState] = useState(false);
  const changeMode = () => {
    setState(!state);
  }
  return (
    <>
      <Mode modeState={state} changeMode={changeMode}/>
      {state? <RegBack /> : <RegGame />}
    </>
  );
}

export default App;
