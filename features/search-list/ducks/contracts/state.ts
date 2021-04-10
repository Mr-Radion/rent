export type SearchResultState = {
  id: number;
  image_url: string;
  image_icon: string;
  ad_name: string;
  location: {
    district: string;
    zone: string;
  };
  bedrooms: string;
  area: number;
  price: number;
  exposition: string;
  language: string[];
  reliability_status: string;
  telephone_number: string;
  publication_date: string;
};
