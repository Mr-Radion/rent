import { SearchActionTypes } from './contracts/actionTypes';
import { SearchActions } from './actions';

const initialState = {
  result: '',
  loading: false,
  error: false,
};

export const searchListReducer = (state = initialState, action: SearchActions): any => {
  switch (action.type) {
    case SearchActionTypes.REQUESTED_SEARCH_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false,
      };
    case SearchActionTypes.REQUESTED_SEARCH_FAILED:
      return {
        ...state,
        result: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
