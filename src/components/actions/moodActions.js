export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = () => {
  return { type: DRINK_COFFEE, actionName: 'drink coffee' };
};

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = () => {
  return { type: EAT_SNACK, actionName: 'eat snack' };
};

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = () => {
  return { type: TAKE_NAP, actionName: 'take nap' };
};

export const STUDY = 'STUDY';
export const study = () => {
  return { type: STUDY, actionName: 'study' };
};
