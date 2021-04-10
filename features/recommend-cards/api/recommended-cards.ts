import { RecommendedAdsState } from '../ducks/contracts';

// interface Response<T> {
//   status: string;
//   data: T;
// }

export const RecommendedCardApi = {
  fetchRecommendedCard(): Promise<RecommendedAdsState[]> {
    const data = fetch('https://api.rentup.cy/json?func=mobile&action=get_recommended');
    // data.then(response => response.json().then(res => res.map(el => console.log(el))));
    return data.then(response => response.json());
  },
};
