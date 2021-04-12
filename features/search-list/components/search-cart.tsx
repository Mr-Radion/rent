import React from 'react';
import { ButtonPrimary } from '../../../ui';

type SearchProps = {
  onClickSearch: any;
};

export const SearchCart: React.FC<SearchProps> = ({ onClickSearch }) => (
  <ButtonPrimary
    fontSize="18px"
    // width="9.5rem"
    minWidth="154px"
    height="38px"
    color="#F1F1F2"
    background="#00A9B0"
    onClick={onClickSearch}
    fontWeight="bold"
    radius="4px"
  >
    Search
  </ButtonPrimary>
);

type SearchQueryProps = {
  onClickSearchQuery: (value: any) => void;
};

export const SearchBar: React.FC<SearchQueryProps> = React.memo(({ onClickSearchQuery }: any) => {
  // const [query, setSearchQuery] = React.useState<any>();
  const handleInputChange = React.useCallback(({ target: { value } }) => {
    // setSearchQuery(value);
    onClickSearchQuery(value);
  }, []);
  return <input type="text" placeholder="Search" onChange={e => handleInputChange(e)} />;
});
