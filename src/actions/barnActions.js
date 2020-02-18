import { fetchBarns } from '../services/farmApi';

export const FETCH_BARNS_LOADING = 'FETCH_BARNS_LOADING';
export const FETCH_BARNS = 'FETCH_BARNS';
export const getBarns = farmId => dispatch => {
  dispatch({ type: FETCH_BARNS_LOADING });
  return fetchBarns(farmId)
    .then(barns => dispatch({
      type: FETCH_BARNS,
      payload: barns
    }));
};

export const setBarnLoading = () => {
  return { type: FETCH_BARNS_LOADING };
};

export const ADD_BARN = 'ADD_BARN';
export const addBarnToState = barn => ({
  type: ADD_BARN,
  payload: barn
});

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const addAnimalToBarn = animal => ({
  type: ADD_ANIMAL,
  payload: animal
});
