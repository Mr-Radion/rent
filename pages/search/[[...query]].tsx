// import ErrorPage from 'next/error';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import useSWR from 'swr';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Container from '../../lib/seo-container/container';
import { MainTemplate, CenterContentTemplate } from '../../ui';
import { SearchCart } from '../../features/search-list';
// import { fetchSearchList } from '../../features/search-list/ducks';
import { Header, Footer, navMainData } from '../../features/common';
import { filterPropertyItems, filterDistrictItems } from '../../features/filters/lib';

const SearchBox = styled.div``;

// type SearchQueryProps = {
//   onClickSearchQuery: (value: any) => void;
// };

// const SearchBar: React.FC<SearchQueryProps> = React.memo(({ onClickSearchQuery }: any) => {
//   // const [query, setSearchQuery] = React.useState<any>();
//   const handleInputChange = React.useCallback(({ target: { value } }) => {
//     // setSearchQuery(value);
//     onClickSearchQuery(value);
//   }, []);
//   return <input type="text" placeholder="Search" onChange={e => handleInputChange(e)} />;
// });

// const fetcher = async url => {
//   const res = await fetch(url);
//   const data = await res.json();

//   if (res.status !== 200) {
//     throw new Error(data.message);
//   }
//   return data;
// };

function SearchResultPage({ token }) {
  const { query } = useRouter();
  // const dispatch = useDispatch();
  // console.log(query.location);
  // const { data, error } = useSWR(() => query.location && `/api/search/${query.location}`, fetcher);
  // const data = fetch(`/api/search/${query.location}`).then(response => response.json()).then(res => res);

  const [ads, setAds] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/search', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: query?.q,
        minprice: query?.minprice,
        maxprice: query?.maxprice,
        minsquare: query?.minsquare,
        maxsquare: query?.maxsquare,
        location: query?.location,
        typeProperty: query?.typeProperty,
        room1: query?.room1,
        room2: query?.room2,
        room3: query?.room3,
        room4: query?.room4,
        room5: query?.room5,
        bedroomsType: query?.bedroomsType,
      }),
    })
      .then(response => response.json())
      .then(res => setAds(res))
      .catch(error => console.log(error));
  }, [query]);

  // console.log(data, error);
  console.log(ads);

  const [searchQuery, setSearchQuery] = React.useState<any>('');
  const searchResult = useSelector(({ searchListResult }: any) => searchListResult);
  const [searchClick, setSearchClick] = React.useState<boolean>(false);
  // const filter = useSelector(({ filters }: any) => filters);
  // const locationRoute =
  //   filter.filterLocationBy.length !== 0
  //     ? `?location=${String(filter.filterLocationBy).toLowerCase()}`
  //     : 'all cities';
  // const typePropertyRoute =
  //   filter.filterTypePropertyBy.length !== 0
  //     ? `&type-property=${String(filter.filterTypePropertyBy).toLowerCase()}`
  //     : '';

  // const searchQueryRoute =
  //   searchQuery.length !== 0 ? `&query=${String(searchQuery).toLowerCase()}` : '';
  // const router = useRouter();

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

  // React.useEffect(() => {
  // router.push({
  // pathname: '/search',
  // search: `${locationRoute}${typePropertyRoute}${searchQueryRoute}`,
  // });
  // if (searchQuery) {
  // dispatch(fetchSearchList(searchQuery));
  // }
  // setSearchQuery(searchQuery);
  // }, [searchClick]);

  // if (error) return <div>{error.message}</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <Container title="Search result" descriptione="Real estate ads in Cyprus">
      <MainTemplate
        header={<Header userNavMenu={navMainData} token={token} />}
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

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default SearchResultPage;
