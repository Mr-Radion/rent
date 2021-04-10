import { combineReducers } from 'redux';

import { filtersReducer } from '../../filters';
import { recommendedCardReducer } from '../../recommend-cards/ducks';
import { searchListReducer } from '../../search-list/ducks';
import { userReducer } from '../../authenticate-form/ducks';

const rootReducer = combineReducers({
  filters: filtersReducer,
  recommendedCard: recommendedCardReducer,
  searchListResult: searchListReducer,
  userAuth: userReducer,
});

export default rootReducer;
