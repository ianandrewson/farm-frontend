import { FETCH_BARNS_LOADING, FETCH_BARNS, ADD_BARN, addAnimalToBarn } from '../actions/barnActions';
import reducer from './barnReducers';

describe('barn reducer tests', () => {
  it('can handle the FETCH_BARNS_LOADING action', () => {
    const initialState = { loading: false, barns: ['blah'] };
    const action = { type: FETCH_BARNS_LOADING };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ loading: true, barns: ['blah'] });
  });
  
  it('can handle the FETCH_BARNS action', () => {
    const initialState = { loading: true, barns: [] };
    const action = {
      type: FETCH_BARNS,
      payload: [
        { _id: '1234', type: 'pig', animals: ['pig', 'pig'] },
        { id: '2345', type: 'cow', animals: ['cow', 'cow'] }
      ]
    };
    const newState = reducer(initialState, action);
    
    expect(newState).toEqual({ loading: false, barns: [
      { _id: '1234', type: 'pig', animals: ['pig', 'pig'] },
      { id: '2345', type: 'cow', animals: ['cow', 'cow'] }
    ] });
  });

  it('can handle the ADD_BARN action', () => {
    const initialState = { barns: ['pig'] };
    const action = { type: ADD_BARN, payload: 'chicken' };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ barns: ['pig', 'chicken'], loading: false });
  });

  it('can handle the ADD_ANIMAL action', () => {
    const initialState = { 
      barns: [
        { barnType: 'pig', animals: ['pig1', 'pig2'] },
        { barnType: 'pig', animals: [] }
      ]
    };
    const action = addAnimalToBarn('pig3', 1);
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ 
      barns: [
        { barnType: 'pig', animals: ['pig1', 'pig2'] },
        { barnType: 'pig', animals: ['pig3'] }
      ],
      loading: false
    });
  });
});
