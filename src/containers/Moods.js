import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import reducer from '../components/reducers/moodReducers.js';
import { getFace } from '../components/selectors/moodSelectors.js';
import { drinkCoffee, eatSnack, takeNap, study } from '../components/actions/moodActions.js';

export default function Moods() {
  const [mood, dispatch] = useReducer(reducer, { coffees: 0, snacks: 0, naps: 0, studies: 0 });
  const face = getFace(mood);
  //this next line feels and looks super wrong and dirty to me
  const actions = [{ action: drinkCoffee, count: mood.coffees }, { action: eatSnack, count: mood.snacks }, { action: takeNap, count: mood.naps }, { action: study, count: mood.studies }];

  return (
    <>
      <Controls actions={actions} dispatch={dispatch}/>
      <Face emoji={face} />
    </>
  );
}

