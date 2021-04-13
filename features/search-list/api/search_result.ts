import { SearchResultState } from '../ducks/contracts';

// interface Response<T> {
//   status: string;
//   data: T;
// }

export const SearchResultApi = {
  fetchSearchResult(searchQuery): Promise<SearchResultState[]> {
    // const data = fetch(`https://api.rentup.cy/json?func=mobile&action=getOrder`);
    const data = fetch(`http://localhost:4201/search_result?ad_name=${searchQuery}`);
    return data.then(response => response.json());
  },
};
