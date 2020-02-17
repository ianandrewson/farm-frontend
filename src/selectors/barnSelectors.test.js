import {
  selectBarnsLoading,
  selectBarns
} from './barnSelectors.js';

describe('barn selector tests', () => {
  it('should be able to select loading state', () => {
    const state = { barns: { loading: false, barns: ['blah'] } };
    expect(selectBarnsLoading(state)).toEqual(false);
  });

  it('should be able to select barns from state', () => {
    const state = { barns: { loading: false, barns: ['blah', 'blerh'] } };
    expect(selectBarns(state)).toEqual(['blah', 'blerh']);
  });
});
