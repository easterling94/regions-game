import { useState } from 'react';
import { checkValue, checkForm } from '../../utils/formLogic';
import { VALUES, COLORS } from './utils';
import { useAppDispatch } from '../../services/store';
import { createRegionsData } from '../../services/thunks/regionsThunks';
import styles from './regForm.module.css';

function RegForm() {
  const dispatch = useAppDispatch();
  const [regName, setRegName] = useState('');
  const [regCodes, setRegCodes] = useState([]);
  const { regNameValues, regCodesValues, btnValues } = VALUES;
  const btnBackground = (regName && regCodes.length) ? 'filled' : 'notFilled';

  const handleInputChange = (e) => {
    const value = checkValue(e.target.value, e.target.name);
    switch (e.target.name) {
      case regNameValues.name:
        setRegName(value);
        break;
      case regCodesValues.name:
        setRegCodes(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm(regName, regCodes)) {
      dispatch(createRegionsData({ regName, regCodes }));
    } else return;
  };

  return (
    <div className={styles.regNew}>
      <h1>Интерфейс изменения данных</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.regInput}>
          <label>{regNameValues.lbl}</label>
          <input value={regName} name={regNameValues.name} type={regNameValues.type} placeholder={regNameValues.plhldr} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className={styles.regInput}>
          <label>{regCodesValues.lbl}</label>
          <input value={regCodes} name={regCodesValues.name} type={regCodesValues.type} placeholder={regCodesValues.plhldr} onChange={(e) => handleInputChange(e)} />
        </div>
        <input type={btnValues.type} value={btnValues.value} className={styles.btn} style={{ backgroundColor: COLORS[btnBackground] }} />
      </form>
    </div>
  );
}

export default RegForm;
