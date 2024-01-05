import RegGame from '../RegGame/RegGame';
import { useState } from 'react';


function App() {
  const [state, setState] = useState(false);
  const changeMode = () => {
    setState(!state);
  }
  return (
    <RegGame />
  );
}

export default App;
