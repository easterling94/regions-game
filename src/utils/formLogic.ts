import { NAMES_TYPES, VALUES_NAMES } from '../components/RegBack/utils';

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
  return value.replace(/[^a-zА-Я ]/gi, '')
}

const checkCodes = (value: string) => {
  return value.replace(/[^0-9,]/g, '').replace(/,/g, ', ');
}

export const checkForm = (name: string, codes: string): boolean => {
  return (!!name && !!codes)
}