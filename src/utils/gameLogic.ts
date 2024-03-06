import { TRegion } from './sharedTypes';

export const prepareBoard = (regionsInitial: Array<TRegion>, regionsTrimmed: Array<TRegion>) => {

  const regTrimmed = [...regionsTrimmed];
  const regInit = [...regionsInitial];

  const randomRegion = regTrimmed[Math.floor(Math.random() * regTrimmed.length)];

  const regCodes = randomRegion.currRegCode;
  const restCodes = regInit.filter(el => el.id !== randomRegion.id).map(el => el.currRegCode).flat();

  const codesToAnswer = new Array(4);

  const randomCorrectCount = Math.floor(Math.random() * Math.min(4, regCodes.length)) + 1;

  for (let i = 0; i < randomCorrectCount; i++) {
    const randomCell = Math.floor(Math.random() * 4);
    if (codesToAnswer[randomCell] === undefined) {
      codesToAnswer[randomCell] = regCodes[i]
    }
  }

  for (let i = 0; i < codesToAnswer.length; i++) {
    if (codesToAnswer[i] === undefined) {
      codesToAnswer[i] = restCodes[Math.floor(Math.random() * restCodes.length)]
    }
  }

  const restRegions = regTrimmed.filter((el) => el.id !== randomRegion.id);

  return { codesToAnswer, randomRegion, restRegions };
};

export const checkAnswers = (randomRegion: TRegion, answerArray: Array<string>, codesToAnswer: Array<string>): boolean => {
  const correctArray = randomRegion.currRegCode.filter(el => codesToAnswer.includes(el)).sort().join();
  const chosenAnswers = answerArray.filter(el => el !== '').sort().join();
  const result: boolean = correctArray === chosenAnswers;
  return result;
}

export const prepareTimer = (timerLeft: string): string => {
  const zero = '0';
  let currentTime:any = timerLeft.split(':').map((el) => Number(el));
  let nextTime;
  if (currentTime[1] === 0) {
    nextTime = [currentTime[0] - 1, currentTime[1] = 59];
  } else {
    nextTime = [currentTime[0], currentTime[1] - 1];
  }
  currentTime = nextTime.map((el) => (el < 10 ? `${zero}${el.toString()}` : el.toString()));
  return currentTime
}
