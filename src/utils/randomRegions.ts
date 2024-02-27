import { TRegion } from './sharedTypes';

export const returnRandomRegion = (regions: Array<TRegion>) => {
  const arr = [...regions];

  const randomNumber = Math.floor(Math.random() * arr.length)

  
  const randomRegion = arr[randomNumber];
  
  const restRegions = arr.filter(el => el.id !== randomRegion.id);
  
  console.log(randomRegion)
  console.log(restRegions)

  return { randomRegion, restRegions }

}