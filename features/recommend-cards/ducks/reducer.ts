// import { HYDRATE } from 'next-redux-wrapper';
import { RecommendedAdsActionTypes } from './contracts/actionTypes';
import { RecommendedAdsActions } from './actions';

export const initialState = {
  recommendedCardData: '',
  loading: false,
  error: false,
};

export const recommendedCardReducer = (
  state = initialState,
  action: RecommendedAdsActions,
): any => {
  switch (action.type) {
    // case 'REQUESTED_ADS_RECOMMENDED_STARTED':
    //   return {
    //     ...state,
    //     recommendedCardData: '',
    //     loading: true,
    //     error: false,
    //   };
    // case HYDRATE: {
    //   return { ...state, ...action.payload };
    // }
    case RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_SUCCEEDED:
      return {
        ...state,
        recommendedCardData: action.payload,
        loading: false,
        error: false,
      };
    case RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_FAILED:
      return {
        ...state,
        recommendedCardData: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
