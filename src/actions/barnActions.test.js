import { getBarns, FETCH_BARNS_LOADING, FETCH_BARNS, addBarnToState, ADD_BARN, addAnimalToBarn, ADD_ANIMAL } from './barnActions';

jest.mock('../services/farmApi.js');

describe('barn action tests', () => { 
  it('creates an action for getting barns', () => {
    const dispatch = jest.fn();
    const action = getBarns();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_BARNS_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_BARNS,
          payload: [
            { _id: '1234', type: 'pig', animals: ['pig', 'pig'] },
            { id: '2345', type: 'cow', animals: ['cow', 'cow'] }
          ]
        });
      });
  });

  it('creates an action to add a barn', () => {
    const action = addBarnToState('testBarn');
    expect(action).toEqual({
      type: ADD_BARN,
      payload: 'testBarn'
    });
  });

  it('creates an action to add an animal to a barn', () => {
    const action = addAnimalToBarn('testChicken');
    expect(action).toEqual({
      type: ADD_ANIMAL,
      payload: 'testChicken'
    });
  });
});
