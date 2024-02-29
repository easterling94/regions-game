import { useState, useEffect } from 'react';
import { GameFooter } from './footer';
import { useAppSelector, useAppDispatch } from '../../services/store';
import { prepareBoard } from '../../utils/prepareBoard';
import styles from './board.module.css';

function GameBoard({
  mode, setCorrect, setLives, setHints, correct, lives, hints, hardStop, showHintModal,
}) {
  const { regions } = useAppSelector((store) => store.regions);
  let regionsDataInitial = [...regions];
  const [newRegions, setNewRegions] = useState(null);

  const [currentRegion, setCurrentRegion] = useState('');
  const [regionsData, setRegionsData] = useState(regionsDataInitial);
  const [question, setQuestion] = useState('');
  const [answerList, setAnswerList] = useState(['', '', '', '']);
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  const [stateFour, setStateFour] = useState(false);
  const [stateNext, setStateNext] = useState(false);

  useEffect(() => {
    prepareBoard(regions, regions);
  }, []);

  function getRandomRegion() {
    const randomRegion = Math.floor(Math.random() * regionsData.length);
    return randomRegion;
  }

  function setAnswers(chosenRegion) {
    const order = [1, 2, 3, 4];
    const newOrder = [];

    // 1. making answers appear randomly [1,2,3,4] => e.g. [4,1,3,2]
    while (newOrder.length < 4) {
      const random = Math.ceil(Math.random() * 4);
      const number = order.indexOf(random);
      if (number !== -1) {
        newOrder.push(order[number]);
        order.splice(number, 1);
      }
    }

    // 2. extracting codes from current current region;
    const realRegionCodes = [...chosenRegion.currRegCode];

    // 3. random number of true answers (between 1 and 4)
    const randomTrue = Math.ceil(Math.random() * (realRegionCodes.length <= 4 ? realRegionCodes.length : 4));

    // 4. converting random true/false answers number into real array of answers
    let regionsCodesOnly = [];
    [...regions].forEach((el) => regionsCodesOnly.push(el.currRegCode));
    regionsCodesOnly = regionsCodesOnly.reduce((a, b) => a.concat(b));

    const trueArray = [];
    for (let i = 0; i < randomTrue; i++) {
      const random = Math.floor(Math.random() * realRegionCodes.length);
      trueArray.push(realRegionCodes[random]);
      realRegionCodes.splice(random, 1);
    }

    const falseArray = [];

    if (trueArray.length < 4) {
      const difference = 4 - trueArray.length;
      while (falseArray.length !== difference) {
        const random = Math.floor(Math.random() * regionsCodesOnly.length);
        if (!trueArray.includes(regionsCodesOnly[random])) {
          falseArray.push(regionsCodesOnly[random]);
        }
      }
    }

    const answers = [...trueArray, ...falseArray];

    // 5. setting this array to answer state
    const finallArray = [];
    for (let i = 0; i < newOrder.length; i++) {
      finallArray.push([newOrder[i], answers[i]]);
    }
    const finallArraySorted = finallArray.sort((a, b) => a[0] - b[0]);
    const finallArraySortedMaped = finallArraySorted.map((el) => el[1]);
    setAnswerList(finallArraySortedMaped);
  }

  useEffect(() => {
    // initializing first question
    const randomRegion = getRandomRegion();
    const chosenRegion = regionsDataInitial[randomRegion];
    setQuestion(chosenRegion.regName);
    setCurrentRegion(chosenRegion);
    regionsDataInitial.splice(randomRegion, 1);

    // initializing state with regions AFTER first question, initializing answers
    setRegionsData([...regionsDataInitial]);
    setAnswers(chosenRegion);
    regionsDataInitial = '';
  }, []);

  const nextQuestion = () => {
    prepareBoard(regions, newRegions);
    if (!stateOne && !stateTwo && !stateThree && !stateFour) return;
    const randomRegion = getRandomRegion();
    const chosenRegion = regionsData[randomRegion];
    setStateOne(false);
    setStateTwo(false);
    setStateThree(false);
    setStateFour(false);
    answerCheck();
    if (regionsData.length === 0) {
      hardStop();
      return;
    }
    setQuestion(chosenRegion.regName);
    setCurrentRegion(chosenRegion);
    setRegionsData(regionsData.filter((el) => el.id !== chosenRegion.id));
    setAnswers(chosenRegion);
  };

  const answerCheck = () => {
    const answerChosenList = [];
    let correctAnswers = 0;
    let wrongAnswers = 0;
    if (stateOne) answerChosenList.push(answerList[0]);
    if (stateTwo) answerChosenList.push(answerList[1]);
    if (stateThree) answerChosenList.push(answerList[2]);
    if (stateFour) answerChosenList.push(answerList[3]);

    const currentRegionCodeList = regions.filter((el) => el.regName === question)[0].currRegCode;
    for (let i = 0; i < answerChosenList.length; i++) {
      if (!currentRegionCodeList.includes(answerChosenList[i])) {
        wrongAnswers++;
      } else {
        correctAnswers++;
      }
    }
    switch (mode) {
      case 'Exam':
        setCorrect(correct + correctAnswers);
        setLives(lives - wrongAnswers < 0 ? 0 : lives - wrongAnswers);
        break;
      case 'Training':
        setCorrect(correct + correctAnswers);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if ((stateOne || stateTwo || stateThree || stateFour) && setStateNext(true)) return;
    if (!stateOne && !stateTwo && !stateThree && !stateFour && setStateNext(false)) return;
  }, [stateOne, stateTwo, stateThree, stateFour]);

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
  };

  const color = {
    noEffect: 'white',
    answerChosen: 'rgb(216,216,216)',
    nextAwailable: 'rgb(216,236,103)',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <div className={`${styles.box} ${styles.question}`}>
          Выберете все подходящие номера для:
          <br />
          {question}
        </div>
        <div id="one" className={styles.box} onClick={(e) => { setState(e); }} style={stateOne ? { backgroundColor: color.answerChosen } : { backgroundColor: color.noEffect }}>{answerList[0]}</div>
        <div id="two" className={styles.box} onClick={(e) => { setState(e); }} style={stateTwo ? { backgroundColor: color.answerChosen } : { backgroundColor: color.noEffect }}>{answerList[1]}</div>
        <div id="three" className={styles.box} onClick={(e) => { setState(e); }} style={stateThree ? { backgroundColor: color.answerChosen } : { backgroundColor: color.noEffect }}>{answerList[2]}</div>
        <div id="four" className={styles.box} onClick={(e) => { setState(e); }} style={stateFour ? { backgroundColor: color.answerChosen } : { backgroundColor: color.noEffect }}>{answerList[3]}</div>
        <div className={`${styles.box} ${styles.next}`} style={stateNext ? { backgroundColor: color.nextAwailable } : { backgroundColor: color.noEffect }} onClick={nextQuestion}>Submit</div>
      </div>
      <GameFooter setHints={setHints} hints={hints} currentRegion={currentRegion} showHintModal={showHintModal} />
    </div>
  );
}

export default GameBoard;