import styles from './regForm.module.css';

function RegFormInput({
  value, lbl, id, plhldr, setRegStateF,
}) {
  return (
    <div className={styles.regInput}>
      <label>{lbl}</label>
      <input value={value} id={id} type="text" placeholder={plhldr} onChange={(e) => setRegStateF(e)} />
    </div>
  );
}

export default RegFormInput;
