import {
  drinkCoffee,
  eatSnack,
  takeNap,
  study
} from '../actions/moodActions.js';
import reducer from './moodReducers.js';

describe('mood reducers tests', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = {};
    
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });

    const secondState = reducer(newState, action);
    expect(secondState).toEqual({ coffees: 2 });
  });

  it('handles the EAT_SNACK case', () => {
    const action = eatSnack();
    const initialState = {};

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 1 });

    const secondState = reducer(newState, action);
    expect(secondState).toEqual({ snacks: 2 });
  });

  it('handles the TAKE_NAP case', () => {
    const action = takeNap();
    const initialState = {};

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 1 });

    const secondState = reducer(newState, action);
    expect(secondState).toEqual({ naps: 2 });
  });

  it('handles the STUDY case', () => {
    const action = study();
    const initialState = {};

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 1 });

    const secondState = reducer(newState, action);
    expect(secondState).toEqual({ studies: 2});
  });

  it('handles all other cases', () => {
    const action = { type: 'GO_ON_A_WALK' };
    const initialState = { naps: 2, coffees: 4, studies: 100, snacks: 0 };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
