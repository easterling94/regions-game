export const IS_DEV = 'IS_DEV';
export const IS_PROD = 'IS_PROD';
export const IS_PRODUCTION = window.location.hostname === 'localhost' ? IS_DEV : IS_PROD;