// import React, { useReducer } from 'react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { initialState } from './reducer';
// import { wrapper } from '../features/common/store';
// import { fetchAdsRecommendedAsync } from './sagas';
import { recommendedCardReducer, requestAdsRecommendedSuccess } from '.';
// import { RecommendedAdsItem } from '../components';
import { adsRecommended } from '../../../lib/mock-data/db.json';

const state = {
  recommendedCardData: '',
  loading: false,
  error: false,
};

describe('Recommend cards reducer testing', () => {
  // beforeEach(() => {});
  it('lenght of recommended ads should be incremented', () => {
    // 1. test data
    const action = requestAdsRecommendedSuccess(adsRecommended);

    // 2. action
    const newState = recommendedCardReducer(state, action);

    // console.log(newState);
    // 3. expectation
    expect(newState.recommendedCardData.lenght).toBe(undefined);
    // expect(newState.recommendedCardData.lenght).toBe(8);
  });
});
