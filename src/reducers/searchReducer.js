import {
  TEXT_CHANGED,
  SEARCH_SUBMIT,
  NEW_SEARCH,
  SHOW_DETAILS
} from '../actions/types';

const INITIAL_STATE = {
  query: '',
  results: '',
  searchSubmitted: false,
  selectedId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return { ...state, query: action.payload };
    case SEARCH_SUBMIT:
      return { ...state, results: action.payload, searchSubmitted: true };
    case NEW_SEARCH:
      return INITIAL_STATE
    case SHOW_DETAILS:
      if(state.selectedId === action.payload){
        return { ...state, selectedId: null };
      }
      return { ...state, selectedId: action.payload };
    default:
    return state;
  }
};
