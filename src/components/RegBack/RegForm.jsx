import { checkValue, checkForm } from '../../utils/formLogic';
import { VALUES, COLORS } from './utils';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { setForm } from '../../services/slices/regionsSlice';
import { handleDataForm } from '../../services/thunks/regionsThunks';
import styles from './regForm.module.css';

function RegForm() {
  const dispatch = useAppDispatch();
  const { REGION_NAME, REGION_CODES } = useAppSelector((store) => store.regions.form);
  const { form } = useAppSelector((store) => store.regions);
  const { regNameValues, regCodesValues, btnValues } = VALUES;
  const btnBackground = (REGION_NAME && REGION_CODES.length) ? 'filled' : 'notFilled';

  const handleInputChange = (e) => {
    const value = checkValue(e.target.value, e.target.name);
    switch (e.target.name) {
      case regNameValues.name:
        dispatch(setForm(value));
        break;
      case regCodesValues.name:
        dispatch(setForm(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkForm(REGION_NAME, REGION_CODES)) {
      dispatch(handleDataForm(form));
    } else return;
  };

  return (
    <div className={styles.regNew}>
      <h1>Интерфейс изменения данных</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.regInput}>
          <label>{regNameValues.lbl}</label>
          <input value={REGION_NAME} name={regNameValues.name} type={regNameValues.type} placeholder={regNameValues.plhldr} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className={styles.regInput}>
          <label>{regCodesValues.lbl}</label>
          <input value={REGION_CODES} name={regCodesValues.name} type={regCodesValues.type} placeholder={regCodesValues.plhldr} onChange={(e) => handleInputChange(e)} />
        </div>
        <input type={btnValues.type} value={btnValues.value} className={styles.btn} style={{ backgroundColor: COLORS[btnBackground] }} />
      </form>
    </div>
  );
}

export default RegForm;
