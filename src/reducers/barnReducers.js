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
    case ADD_ANIMAL:
      return { ...state, loading: false, barns:
        state.barns.map((barn, i) => {
          if(i === action.index){
            barn.animals = [...barn.animals, action.payload];
            return barn;
          } else return barn;
        }) 
      };
    default:
      return state;
  }
}
