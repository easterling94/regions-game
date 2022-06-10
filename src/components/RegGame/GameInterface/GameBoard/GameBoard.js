import styles from './gameboard.module.css';
import { useState, useEffect } from 'react';

const GameBoard = ({ regions, mode }) => {
  let regionsDataInitial = [...regions];
  let chosenRegion = '';

  const [regionsData, setRegionsData] = useState(regionsDataInitial);
  const [question, setQuestion] = useState('');
  const [answerList, setAnswerList] = useState(['','','','']);
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  const [stateFour, setStateFour] = useState(false);
  const [stateNext, setStateNext] = useState(false);

  function getRandomRegion() {
    let randomRegion = Math.floor(Math.random() * regionsData.length);
    return randomRegion;
  }

  function setAnswers() {
    let order = [1,2,3,4];
    let newOrder = [];

    // 1. making answers appear randomly [1,2,3,4] => e.g. [4,1,3,2]
    while(newOrder.length < 4) {
        let random = Math.ceil(Math.random() * 4);
        let number = order.indexOf(random);
        if(number !== -1) {
            newOrder.push(order[number]);
            order.splice(number, 1);
        }
    };

    // 2. extracting codes from current and random not current region;
    let realRegionCodes = [...chosenRegion.currRegCode];

    // 3. random number of true (between 1 and 4) and false (between 0 and 3) answers
    let randomTrue = Math.ceil(Math.random() * (realRegionCodes.length <= 4 ? realRegionCodes.length : 4));
    let randomFalse = 4 - randomTrue;
    console.log(randomTrue);

    // 4. converting random true/false answers number into real array of answers
    let trueArray = [];
    for(let i = 0; i < randomTrue; i++) {
      let random = Math.floor(Math.random() * realRegionCodes.length)
      trueArray.push(realRegionCodes[random]);
      realRegionCodes.splice(random, 1);
    };
    console.log(trueArray)

    let falseArray = [];
    if(randomFalse) {
      for(let i = 0; i < randomFalse; i++) {
        let random = Math.floor(Math.random() * 100)
        falseArray.push(random);
      };
    }
    let answers = [...trueArray, ...falseArray];
    console.log(answers);

    // 5. setting this array to answer state
    let finallArray = [];
    for(let i = 0; i < newOrder.length; i++) {
      finallArray.push([newOrder[i], answers[i]])
    }
    let finallArraySorted = finallArray.sort((a,b) => a[0] - b[0]);
    console.log(finallArraySorted);
    let finallArraySortedMaped = finallArraySorted.map((el) => el[1])
    setAnswerList(finallArraySortedMaped);
  }

  useEffect(() => {
    // initializing first question
    let randomRegion = getRandomRegion();
    chosenRegion = regionsDataInitial[randomRegion];
    setQuestion(chosenRegion.regName);
    regionsDataInitial.splice(randomRegion,1);

    //initializing state with regions AFTER first question, initializing answers
    setRegionsData([...regionsDataInitial]);
    setAnswers();
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
    setRegionsData(regionsData.filter((el) => el.id !== chosenRegion.id));
    setAnswers();
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
        <div id='one' className={styles.box} onClick={(e) => {setState(e)}} style={stateOne ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{answerList[0]}</div>
        <div id='two' className={styles.box} onClick={(e) => {setState(e)}} style={stateTwo ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{answerList[1]}</div>
        <div id='three' className={styles.box} onClick={(e) => {setState(e)}} style={stateThree ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{answerList[2]}</div>
        <div id='four' className={styles.box} onClick={(e) => {setState(e)}} style={stateFour ? {backgroundColor: color.answerChosen} : {backgroundColor: color.noEffect}}>{answerList[3]}</div>
        <div className={`${styles.box} ${styles.next}`} style={stateNext ? {backgroundColor: color.nextAwailable} : {backgroundColor: color.noEffect}} onClick={nextQuestion}>Submit</div>
      </div>
    </div>
  )
}

export default GameBoard