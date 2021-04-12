import { RecommendedAdsState } from '../ducks/contracts';

// interface Response<T> {
//   status: string;
//   data: T;
// }

export const RecommendedCardApi = {
  fetchRecommendedCard(): Promise<RecommendedAdsState[]> {
    const data = fetch('https://api.rentup.cy/json?func=mobile&action=get_recommended');
    return data.then(response => response.json());
  },
};
