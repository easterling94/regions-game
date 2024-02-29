import { TRegion } from './sharedTypes';

export const prepareBoard = (regionsInitial: Array<TRegion>, regionsNew: Array<TRegion>) => {

  const regNew = [...regionsNew];
  const regInit = [...regionsInitial];

  const randomNumber = Math.floor(Math.random() * regNew.length);

  const randomRegion = regNew[randomNumber];
  const regName = randomRegion.regName;
  const regCodes = randomRegion.currRegCode;
  const restCodes = regInit.map(el => el.currRegCode).flat().filter(el => regCodes.indexOf(el) === -1);


  const restRegions = regNew.filter((el) => el.id !== randomRegion.id);

  const rightCodesToAnswer = new Array(4);

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

  for(let i = 0; i < rightCodesToAnswer.length; i++) {
    
  }

  console.log(regCodes);
  console.log(restCodes);

  return { regName, restRegions };
};


