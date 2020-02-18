import { FETCH_BARNS_LOADING, FETCH_BARNS, ADD_BARN, ADD_ANIMAL } from '../actions/barnActions';

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
      return { ...state, loading: false, barns: [...state.barns, action.payload] };
    //case ADD_ANIMAL:
      //I don't know how to target a nested array via spreading
      //return { ...state, loading: false, barns: [ ...state.barns, barn.animals: [...animals, action.payload]]}
    default:
      return state;
  }
}
