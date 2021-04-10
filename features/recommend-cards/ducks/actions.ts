import {
  // HydrateRecommendedAdsActionInterface,
  SetRecommendedAdsDataActionInterface,
  SetRecommendedAdsFailedActionInterface,
  FetchRecommendedAdsActionInterface,
  RecommendedAdsActionTypes,
} from './contracts/actionTypes';

import { RecommendedAdsState } from './contracts/state';

// export const requestAdsRecommendedStarted = () =>
// ({ type: 'REQUESTED_ADS_RECOMMENDED_STARTED' });

export const requestAdsRecommendedSuccess = (
  payload: RecommendedAdsState[],
): SetRecommendedAdsDataActionInterface => ({
  type: RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_SUCCEEDED,
  payload,
});

export const requestAdsRecommendedError = (): SetRecommendedAdsFailedActionInterface => ({
  type: RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_FAILED,
});

export const fetchAdsRecommended = (): FetchRecommendedAdsActionInterface => ({
  type: RecommendedAdsActionTypes.FETCHED_ADS_RECOMMENDED,
});

export type RecommendedAdsActions =
  // | HydrateRecommendedAdsActionInterface
  SetRecommendedAdsDataActionInterface | SetRecommendedAdsFailedActionInterface;
