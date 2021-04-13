import { FiltersActions } from './actions';

const initialState = {
  filterTypePropertyBy: ['Apartment'],
  filterPriceBy: {
    from: 0,
    to: 0,
  },
  filterSquareBy: {
    from: 0,
    to: 0,
  },
  filterBedroomsCounterBy: [1, 2],
  filterBedroomsTypeBy: [],
  filterLocationBy: ['All cities'],
};

export const filtersReducer = (state = initialState, action: FiltersActions): any => {
  switch (action.type) {
    case 'SET_FILTER_PROPERTY_BY':
      return {
        ...state,
        filterTypePropertyBy: action.payload,
      };
    case 'SET_FILTER_PRICE_BY':
      return {
        ...state,
        filterPriceBy: action.payload,
      };
    case 'SET_FILTER_AREA_BY':
      return {
        ...state,
        filterSquareBy: action.payload,
      };
    case 'SET_FILTER_BEDROOMS_COUNTER_BY':
      return {
        ...state,
        filterBedroomsCounterBy: action.payload,
      };
    case 'SET_FILTER_BEDROOMS_TYPE_BY':
      return {
        ...state,
        filterBedroomsTypeBy: action.payload,
      };
    case 'SET_FILTER_LOCATION_BY':
      return {
        ...state,
        filterLocationBy: action.payload,
      };
    default:
      return state;
  }
};
