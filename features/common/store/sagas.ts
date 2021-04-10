import { all } from 'redux-saga/effects';
import { watchFetchAdsRecommended } from '../../recommend-cards/ducks';
import { watchFetchSearch } from '../../search-list/ducks';
import { watchAuthSaga } from '../../authenticate-form/ducks';

export default function* rootSaga(): Generator {
  yield all([watchFetchAdsRecommended(), watchFetchSearch(), watchAuthSaga()]);
}
