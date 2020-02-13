import { getFace } from './moodSelectors.js';

describe('mood selector tests', () => {
  it('can get the right face', () => {
    const state = { coffees: 0, snacks: 0, naps: 0, studies: 0 };
    let face = getFace(state);
    expect(face).toEqual('😠');

    state.coffees = 1;
    face = getFace(state);
    expect(face).toEqual('😡');

    state.snacks = 1;
    face = getFace(state);
    expect(face).toEqual('😀');

    state.coffees = 4;
    face = getFace(state);
    expect(face).toEqual('🙀');

    state.snacks = 0;
    face = getFace(state);
    expect(face).toEqual('😱');

    state.coffees = 0;
    state.snacks = 1;
    face = getFace(state);
    expect(face).toEqual('😴');

    state.naps = 1;
    state.study = 3;
    face = getFace(state);
    expect(face).toEqual('😲');
  });
});
