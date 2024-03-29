export enum REGION_PROPERTIES {
  REGION_NAME = 'REGION_NAME',
  REGION_CODES = 'REGION_CODES',
}

export type TRegionRaw = {
  [k in REGION_PROPERTIES]: string
}

export type TRegion = {
  id: number | null,
  REGION_NAME: string,
  REGION_CODES: Array<string>,
};

export type TForm = {
  id: number | null,
  REGION_NAME: string,
  REGION_CODES: string,
}

export type TFormPayload = {
  [k in keyof TForm]: {type: k; payload: TForm[k]}
}[keyof TForm];

export enum LOAD_STATUSES {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export enum ENVIRONMENT {
  IS_DEV_MOCK = 'IS_DEV_MOCK', // локально с недоступным бэком
  IS_DEV = 'IS_DEV', // локально с бэком
  IS_PROD_MOCK = 'IS_PROD_MOCK', // развернуто с недоступным бэком
  IS_PROD = 'IS_PROD', // развернуто с бэком
};

export type TEnvironment = keyof typeof ENVIRONMENT;

export type TMode = 'home' | 'game' | 'results' | 'backend';

export type TBoard = {
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  next: boolean;
};
