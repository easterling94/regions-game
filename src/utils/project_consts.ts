export const TEST_URL = 'https://jsonplaceholder.typicode.com/todos/1';
export const DEV_URL = 'http://localhost:5000';
export const PROD_URL = 'https://github.com/reduxjs/redux-toolkit/issues/429';

export enum ENVIRONMENT {
  IS_DEV_MOCK = 'IS_DEV_MOCK', // локально с недоступным бэком
  IS_DEV = 'IS_DEV', // локально с бэком
  IS_PROD_MOCK = 'IS_PROD_MOCK', // развернуто с недоступным бэком
  IS_PROD = 'IS_PROD' // развернуто с бэком
}

export type TEnvironment = keyof typeof ENVIRONMENT;

export const IS_LOCALHOST = window.location.hostname === 'localhost';


export const IS_DEV = 'IS_DEV';
export const IS_PROD = 'IS_PROD';


export const IS_PRODUCTION = window.location.hostname === 'localhost' ? IS_DEV : IS_PROD;