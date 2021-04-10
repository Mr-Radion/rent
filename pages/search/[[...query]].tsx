// import ErrorPage from 'next/error';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Container from '../../lib/seo-container/container';
import { MainTemplate, CenterContentTemplate } from '../../ui';
import { SearchCart } from '../../features/search-list';
import { fetchSearchList } from '../../features/search-list/ducks';
import { Header, Footer, navMainData } from '../../features/common';
import { filterPropertyItems, filterDistrictItems } from '../../features/filters/lib';

const SearchBox = styled.div``;

function SearchResultPage() {
  const [searchQuery, setSearchQuery] = React.useState<any>('');
  const searchResult = useSelector(({ searchListResult }: any) => searchListResult);
  const dispatch = useDispatch();
  const [searchClick, setSearchClick] = React.useState<boolean>(false);
  const filter = useSelector(({ filters }: any) => filters);
  const locationRoute =
    filter.filterLocationBy.length !== 0
      ? `?location=${String(filter.filterLocationBy).toLowerCase()}`
      : 'all cities';
  const typePropertyRoute =
    filter.filterTypePropertyBy.length !== 0
      ? `&type-property=${String(filter.filterTypePropertyBy).toLowerCase()}`
      : '';

  const searchQueryRoute =
    searchQuery.length !== 0 ? `&query=${String(searchQuery).toLowerCase()}` : '';
  const router = useRouter();

  const handleInputChange = React.useCallback(({ target: { value } }) => {
    setSearchQuery(value);
  }, []);

  // synchronization of url and business logic of filters
  // React.useEffect(() => {
  //   router.push({
  //     pathname: '/search',
  //     search: `${locationRoute}${typePropertyRoute}${searchQueryRoute}`,
  //   });
  // }, [filter, searchClick]);

  const getSearch = () => {
    // router.push({
    //   pathname: '/search',
    //   search: `${locationRoute}${typePropertyRoute}${searchQueryRoute}`,
    // });
    setSearchClick(!searchClick);
  };

  React.useEffect(() => {
    router.push({
      pathname: '/search',
      search: `${locationRoute}${typePropertyRoute}${searchQueryRoute}`,
    });
    // if (searchQuery) {
    dispatch(fetchSearchList(searchQuery));
    // }
    setSearchQuery(searchQuery);
  }, [searchClick]);

  return (
    <Container title="Search result" descriptione="Real estate ads in Cyprus">
      <MainTemplate
        header={<Header userNavMenu={navMainData} />}
        footer={
          <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
        }
      >
        <CenterContentTemplate>
          <SearchBox>
            <input
              type="text"
              placeholder="Search"
              onChange={e => handleInputChange(e)}
              value={searchQuery}
            />
            <SearchCart onClickSearch={() => getSearch()} />
          </SearchBox>
          <div>
            {searchResult.result !== ''
              ? searchResult.result.map(obj => (
                  <div key={obj.id}>
                    <ul>
                      <li>{obj.ad_name}</li>
                      <li>{obj.location.district}</li>
                    </ul>
                  </div>
                ))
              : 'Не найдено'}
          </div>
        </CenterContentTemplate>
      </MainTemplate>
    </Container>
  );
}

export default SearchResultPage;
