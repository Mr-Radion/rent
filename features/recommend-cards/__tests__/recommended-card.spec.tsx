import React from 'react';
import { render } from '../../../test/test-utils';
import { RecommendedAdsItem } from '../components';
import data from '../../../lib/mock-data/db.json';

describe('RecommendedAdsItem', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<RecommendedAdsItem cardItems={data.adsRecommended} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
