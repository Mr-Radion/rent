import { Action } from 'redux';
import { SearchResultState } from './state';

export enum SearchActionTypes {
  // HYDRATE = 'HYDRATE',
  REQUESTED_SEARCH_STARTED = 'REQUESTED_SEARCH_STARTED',
  REQUESTED_SEARCH_FAILED = 'REQUESTED_SEARCH_FAILED',
  REQUESTED_SEARCH_SUCCESS = 'REQUESTED_SEARCH_SUCCESS',
  FETCHED_DATA_SEARCH = 'FETCHED_DATA_SEARCH',
}

// export interface HydrateRecommendedAdsActionInterface extends Action<SearchActionTypes> {
//   payload: SearchActionTypes.HYDRATE;
// }

export interface RequestSearchFailedActionInterface extends Action<SearchActionTypes> {
  type: SearchActionTypes.REQUESTED_SEARCH_FAILED;
}

export interface RequestSearchSuccessActionInterface extends Action<SearchActionTypes> {
  type: SearchActionTypes.REQUESTED_SEARCH_SUCCESS;
  payload: SearchResultState[];
}

export interface FetchDataActionInterface extends Action<SearchActionTypes> {
  type: SearchActionTypes.FETCHED_DATA_SEARCH;
  payload: any;
}
