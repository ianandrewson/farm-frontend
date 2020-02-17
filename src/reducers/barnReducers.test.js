import { getBarns, FETCH_BARNS_LOADING } from '../actions/barnActions';

describe('barn reducer tests', () => {
  it('can handle the FETCH_BARNS_LOADING action', () => {
    const initialState = { loading: false, barns: ['blah'] };
    const action = { type: FETCH_BARNS_LOADING };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ loading: true, barns: ['blah'] });
  });
  
  it('can handle the FETCH_BARNS action', () => {
    const initialState = { loading: true, barns: [] };
    const action = getBarns();
    const newState = reducer(initialState, action);
    
    expect(newState).toEqual({ loading: false, barns: [
      { _id: '1234', type: 'pig', animals: ['pig', 'pig'] },
      { id: '2345', type: 'cow', animals: ['cow', 'cow'] }
    ] });
  });
});
