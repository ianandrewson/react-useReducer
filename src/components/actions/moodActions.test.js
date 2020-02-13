import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from './moodActions.js';

describe('mood action creator tests', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ type: 'DRINK_COFFEE', actionName: 'drink coffee' });
  });

  it('creates an eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({ type: 'EAT_SNACK', actionName: 'eat snack' });
  });

  it('creates a take nap action', () => {
    const action = takeNap();

    expect(action).toEqual({ type: 'TAKE_NAP', actionName: 'take nap' });
  });

  it('creates a study action', () => {  
    const action = study();

    expect(action).toEqual({ type: 'STUDY', actionName: 'study' });
  });
});
