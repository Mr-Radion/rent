// import { useSelector, useDispatch } from 'react-redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  // requestAdsRecommendedStarted,
  requestAdsRecommendedSuccess,
  requestAdsRecommendedError,
} from './actions';

import { RecommendedAdsActionTypes } from './contracts/actionTypes';
import { RecommendedCardApi } from '../api';

export function* fetchAdsRecommendedAsync(): Generator<any> {
  try {
    // yield put(requestAdsRecommendedStarted());
    const data: any = yield call(RecommendedCardApi.fetchRecommendedCard);
    yield put(requestAdsRecommendedSuccess(data));
  } catch (error) {
    // console.log(error);
    yield put(requestAdsRecommendedError());
  }
}

export function* watchFetchAdsRecommended(): Generator<any> {
  yield takeEvery(RecommendedAdsActionTypes.FETCHED_ADS_RECOMMENDED, fetchAdsRecommendedAsync);
}

// const get = fetchAdsRecommendedAsync();

// const cardData = useSelector(({ recommendedCard }: any) => recommendedCard);
// dispatch(fetchAdsRecommended());

// console.log(get.next(RecommendedCardApi.fetchRecommendedCard).value);
// console.log(get.next().value);
