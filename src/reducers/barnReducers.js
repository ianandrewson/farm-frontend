import { FETCH_BARNS_LOADING, FETCH_BARNS, ADD_BARN } from '../actions/barnActions';

const initialState = {
  barns: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BARNS_LOADING:
      return { ...state, loading: true };
    case FETCH_BARNS:
      return { ...state, loading: false, barns: action.payload };
    case ADD_BARN:
      return { ...state, loading: false, barns: [...state.barns, action.payload]};
    default:
      return state;
  }
}
