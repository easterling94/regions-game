import styles from './gameboard.module.css';
import { useState, useEffect } from 'react';

const GameBoard = ({ regions, mode }) => {
  let regionsDataInitial = [...regions];
  let chosenRegion = '';
  let ans1 = 18;
  let ans2 = 19;
  let ans3 = 20;
  let ans4 = 21;

  const [regionsData, setRegionsData] = useState(regionsDataInitial)
  const [questionNumber, setQuestionNumber] = useState(0);
  const [question, setQuestion] = useState('');
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  const [stateFour, setStateFour] = useState(false);
  const [stateNext, setStateNext] = useState(false);

  function getRandomRegion() {
    let randomRegion = Math.floor(Math.random() * regionsData.length);
    return randomRegion;
  }

  useEffect(() => {
    // initializing first question
    let randomRegion = getRandomRegion();
    chosenRegion = regionsDataInitial[randomRegion];
    setQuestion(chosenRegion.regName);
    regionsDataInitial.splice(randomRegion,1);

    //initializing state with regions AFTER first question
    setRegionsData([...regionsDataInitial]);
    regionsDataInitial = '';
  },[]);

  const nextQuestion = () => {
    if(!stateOne && !stateTwo && !stateThree && !stateFour) return alert('Please chose at least one option');
    setStateOne(false);
    setStateTwo(false);
    setStateThree(false);
    setStateFour(false);
    if(regionsData.length === 0) return alert('Thats all folks!') // Ending component required
    let randomRegion = getRandomRegion();
    chosenRegion = regionsData[randomRegion];
    setQuestion(chosenRegion.regName);
    setRegionsData(regionsData.filter((el) => el.id !== chosenRegion.id))
  }

  useEffect(() => {
    if((stateOne || stateTwo || stateThree || stateFour) && setStateNext(true)) return;
    if(!stateOne && !stateTwo && !stateThree && !stateFour && setStateNext(false)) return;
  }, [stateOne, stateTwo, stateThree, stateFour])

  const setState = (e) => {
    switch (e.currentTarget.id) {
      case 'one':
        setStateOne(!stateOne);
        break;
      case 'two':
        setStateTwo(!stateTwo);
        break;
      case 'three':
        setStateThree(!stateThree);
        break;
      case 'four':
        setStateFour(!stateFour);
        break;
      default:
        break;
    }
  }

  const color = {
    noEffect: 'white',
    answerChosen: 'rgb(216,216,216)',
    nextAwailable: 'rgb(216,236,103)'
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <div className={`${styles.box} ${styles.question}`}>{question}</div>
        <div id='one' className={styles.box} onClick={(e) => {setState(e)}} style={stateOne ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{ans1}</div>
        <div id='two' className={styles.box} onClick={(e) => {setState(e)}} style={stateTwo ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{ans2}</div>
        <div id='three' className={styles.box} onClick={(e) => {setState(e)}} style={stateThree ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{ans3}</div>
        <div id='four' className={styles.box} onClick={(e) => {setState(e)}} style={stateFour ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{ans4}</div>
        <div className={`${styles.box} ${styles.next}`} style={stateNext ? {backgroundColor: color.nextAwailable} : {backgroundColor: color.noEffect}} onClick={nextQuestion}>Submit</div>
      </div>
    </div>
  )
}

export default GameBoard