export enum VALUES_NAMES {
  REGNAME = 'REG_NAME',
  REGCODES = 'REG_CODES',
}

export type NAMES_TYPES = `${VALUES_NAMES}`;

export const VALUES = {
  regNameValues: {
    name: VALUES_NAMES.REGNAME,
    lbl: 'Название региона',
    type: 'text',
    plhldr: 'Название региона',
  },
  regCodesValues: {
    name: VALUES_NAMES.REGCODES,
    lbl: 'Коды региона',
    type: 'text',
    plhldr: 'Коды региона через \',\' если несколько',
  },
  btnValues: {
    type: 'submit',
    value: 'Сохранить',
  }
};

export const COLORS = {
  filled: '#00B1E1',
  notFilled: '#99B1E1',
};