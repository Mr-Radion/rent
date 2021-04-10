import adsItem from '../../../lib/mock-data/db.json';

export const ProductCardApi = {
  fetchProductCardItem(id: number): any {
    const data = adsItem.ads.filter(idx => idx.id === id);
    return data;
  },
};
