export type TRegion = {
  id: number,
  regName: string,
  currRegCode: Array<string>
}

export enum ENVIRONMENT {
  IS_DEV_MOCK = 'IS_DEV_MOCK', // локально с недоступным бэком
  IS_DEV = 'IS_DEV', // локально с бэком
  IS_PROD_MOCK = 'IS_PROD_MOCK', // развернуто с недоступным бэком
  IS_PROD = 'IS_PROD' // развернуто с бэком
}

export type TEnvironment = keyof typeof ENVIRONMENT;

export type TMode = 'home' | 'game' | 'results' | 'backend';