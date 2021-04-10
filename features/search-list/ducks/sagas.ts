import { call, put, takeEvery } from 'redux-saga/effects';
import {
  // requestSearchStarted,
  requestSearchSuccess,
  requestSearchError,
} from './actions';

import { SearchActionTypes, FetchDataActionInterface } from './contracts/actionTypes';
import { SearchResultApi } from '../api';

export function* fetchSearchAsync({
  payload: searchQuery,
}: FetchDataActionInterface): Generator<any> {
  try {
    // yield put(requestSearchStarted());
    const data: any = yield call(SearchResultApi.fetchSearchResult, searchQuery);
    yield put(requestSearchSuccess(data));
  } catch (error) {
    // console.log(error);
    yield put(requestSearchError());
  }
}

export function* watchFetchSearch(): Generator<any> {
  yield takeEvery(SearchActionTypes.FETCHED_DATA_SEARCH, fetchSearchAsync);
}
