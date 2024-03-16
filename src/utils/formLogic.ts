import { NAMES_TYPES, VALUES_NAMES } from '../components/RegBack/utils';
import { REGION_PROPERTIES } from './sharedTypes';

export const checkValue = <T>(value: T, name: NAMES_TYPES) => {
  if (typeof value === 'string') {
    switch (name) {
      case VALUES_NAMES.REGNAME:
        return checkName(value);
      case VALUES_NAMES.REGCODES:
        return checkCodes(value)
      default: 
      break
    }
  }
};

const checkName = (value: string) => {
  return {
    type: REGION_PROPERTIES.REGION_NAME,
    payload: value.replace(/[^a-zА-Я ]/gi, '')
  };
}

const checkCodes = (value: string) => {
  return {
    type: REGION_PROPERTIES.REGION_CODES,
    payload: value.replace(/[^0-9,]/g, '').replace(/,/g, ', ')
  };
}

export const checkForm = (name: string, codes: string): boolean => {
  return (!!name && !!codes)
}