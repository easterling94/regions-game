import { ENVIRONMENT } from '../../utils/sharedTypes';

export enum BUTTON_TYPES {
  back = 'back',
  environment = 'environment',
}

export const ENV_CONTENT = {
  [ENVIRONMENT.IS_DEV]: 'DEV, данные с сервера',
  [ENVIRONMENT.IS_DEV_MOCK]: 'DEV, моковые данные',
  [ENVIRONMENT.IS_PROD]: 'PROD, данные с сервера',
  [ENVIRONMENT.IS_PROD_MOCK]: 'PROD моковые данные',
}