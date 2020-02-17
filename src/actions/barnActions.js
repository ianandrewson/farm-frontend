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
