import {
  SearchActionTypes,
  RequestSearchFailedActionInterface,
  RequestSearchSuccessActionInterface,
  FetchDataActionInterface,
} from './contracts/actionTypes';

import { SearchResultState } from './contracts';

// export const requestSearchStarted = () =>
// ({ type: 'REQUESTED_SEARCH_STARTED' });

export const requestSearchSuccess = (
  payload: SearchResultState[],
): RequestSearchSuccessActionInterface => ({
  type: SearchActionTypes.REQUESTED_SEARCH_SUCCESS,
  payload,
});

export const requestSearchError = (): RequestSearchFailedActionInterface => ({
  type: SearchActionTypes.REQUESTED_SEARCH_FAILED,
});

export const fetchSearchList = (payload: any): FetchDataActionInterface => ({
  type: SearchActionTypes.FETCHED_DATA_SEARCH,
  payload,
});

export type SearchActions =
  | RequestSearchSuccessActionInterface
  | RequestSearchFailedActionInterface;
