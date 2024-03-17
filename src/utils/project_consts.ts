export const TEST_URL = 'https://jsonplaceholder.typicode.com/todos/1';
export const DEV_URL = 'http://localhost:5000';
export const PROD_URL = 'https://github.com/reduxjs/redux-toolkit/issues/429';

export const IS_LOCALHOST = window.location.hostname === 'localhost';


export const IS_DEV = 'IS_DEV';
export const IS_PROD = 'IS_PROD';


export const IS_PRODUCTION = window.location.hostname === 'localhost' ? IS_DEV : IS_PROD;

export const TIMER_END = '00:00';
export const TIMER_START = '03:00';
export const LIVE_COUNTER = 10;
export const HINT_COUNTER = 10;
export const CORRECT_COUNTER = 0;