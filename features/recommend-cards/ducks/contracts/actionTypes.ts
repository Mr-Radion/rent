import { Action } from 'redux';
import { RecommendedAdsState } from './state';

export enum RecommendedAdsActionTypes {
  HYDRATE = 'HYDRATE',
  REQUESTED_ADS_RECOMMENDED_FAILED = 'REQUESTED_ADS_RECOMMENDED_FAILED',
  REQUESTED_ADS_RECOMMENDED_SUCCEEDED = 'REQUESTED_ADS_RECOMMENDED_SUCCEEDED',
  FETCHED_ADS_RECOMMENDED = 'FETCHED_ADS_RECOMMENDED',
}

export interface HydrateRecommendedAdsActionInterface extends Action<RecommendedAdsActionTypes> {
  payload: RecommendedAdsActionTypes.HYDRATE;
}

export interface SetRecommendedAdsFailedActionInterface extends Action<RecommendedAdsActionTypes> {
  type: RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_FAILED;
}

export interface SetRecommendedAdsDataActionInterface extends Action<RecommendedAdsActionTypes> {
  type: RecommendedAdsActionTypes.REQUESTED_ADS_RECOMMENDED_SUCCEEDED;
  payload: RecommendedAdsState[];
}

export interface FetchRecommendedAdsActionInterface extends Action<RecommendedAdsActionTypes> {
  type: RecommendedAdsActionTypes.FETCHED_ADS_RECOMMENDED;
}
