import { useState, useEffect } from 'react';
import RegFormInput from './RegFormInput';
import styles from './regForm.module.css';

function RegForm() {
  const [regName, setRegName] = useState(null);
  const [regCodes, setRegCodes] = useState([]);
  const btnBackground = (regName && regCodes.length) ? 'filled' : 'notFilled';
  const colors = {
    filled: '#00B1E1',
    notFilled: '#99B1E1',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submited');
  };

  return (
    <div className={styles.regNew}>
      <h1>Интерфейс изменения данных</h1>
      <form onSubmit={handleSubmit}>
        <RegFormInput value={regName} lbl="Название региона" id="regName" plhldr="Название региона" setRegStateF={setRegName} />
        <RegFormInput value={regCodes} lbl="Коды региона" id="currRegCode" plhldr='Коды региона через "," если несколько' setRegStateF={setRegCodes} />
        <input type="submit" value="Сохранить" className={styles.btn} style={{ backgroundColor: colors[btnBackground] }} />
      </form>
    </div>
  );
}

export default RegForm;
