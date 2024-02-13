/****************/
export const DEV_URL_WEB = 'http://localhost:3000/regions';
export const PROD_URL = '';

export const ENVIRONMENT = {
  IS_DEV_MOCK: 'IS_DEV_MOCK', // локально с недоступным бэком
  IS_DEV: 'IS_DEV', // локально с бэком
  IS_PROD_MOCK: 'IS_PROD_MOCK', // развернуто с недоступным бэком
  IS_PROD: 'IS_PROD' // развернуто с бэком
}

const IS_LOCALHOST = window.location.hostname === 'localhost';
const IS_BACKEND_RESPONDING = async () => {
  try {
    return await fetch('https://localhost:3000/api/regions/').then(response => response.ok)
  }
  catch {
    return false
  }
}

export let THIS_ENVIRONMENT: boolean;

export const checkEnvironment = async () => {
  if (IS_LOCALHOST && await IS_BACKEND_RESPONDING()) {
    console.log(ENVIRONMENT.IS_DEV)
    return ENVIRONMENT.IS_DEV
  }
  if (IS_LOCALHOST && ! await IS_BACKEND_RESPONDING()) {
    console.log(ENVIRONMENT.IS_DEV_MOCK)
    return ENVIRONMENT.IS_DEV_MOCK
  }
  if (!IS_LOCALHOST && await IS_BACKEND_RESPONDING()) {
    console.log(ENVIRONMENT.IS_PROD)
    return ENVIRONMENT.IS_PROD
  }
  if (!IS_LOCALHOST && !await IS_BACKEND_RESPONDING()) {
    console.log(ENVIRONMENT.IS_PROD_MOCK)
    return ENVIRONMENT.IS_PROD_MOCK
  }
}

checkEnvironment();

export const IS_DEV = 'IS_DEV';
export const IS_PROD = 'IS_PROD';



export const IS_PRODUCTION = window.location.hostname === 'localhost' ? IS_DEV : IS_PROD;

export const URL = THIS_ENVIRONMENT === ENVIRONMENT.IS_DEV ? 'http://localhost:5001/regions' : '';