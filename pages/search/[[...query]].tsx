// import ErrorPage from 'next/error';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import useSWR from 'swr';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Container from '../../lib/seo-container/container';
import { MainTemplate, ButtonPrimary, H1, H2, H3, H4, Sorting, Input } from '../../ui';
import { SearchCart } from '../../features/search-list';
// import { fetchSearchList } from '../../features/search-list/ducks';
import { Header, Footer, navMainData } from '../../features/common';
import { filterPropertyItems, filterDistrictItems } from '../../features/filters/lib';

const SearchBox = styled.div`
  margin-left: auto;
  padding: 20px 0;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 20px 0 20px;
  .head {
    border-top: 1px solid #a1d6e2;
  }
`;

const FavoritesHead = styled.div`
  display: flex;
  margin: 0 0 30px 0;
  border-bottom: 1px solid #00a9b0;
  padding: 25px 0 50px 0;
  > button {
    > svg {
      margin-left: 10px;
    }
  }
  > button {
    margin-left: auto;
  }
`;
const FavCard = styled.div`
  display: flex;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid #bcbabe;
  // border-top: 1px solid #bcbabe;
  .img {
    width: 316px;
    height: 316px;
    background: #000;
    margin: 0 30px 0 50px;
  }
  .desc {
    max-width: 38%;
    margin-right: 20px;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
    margin-left: auto;
  }
  .infoImg {
    width: 100px;
    height: 100px;
    background: #000;
    margin: 0 12px 0 0;
  }
`;

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
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  const { query } = useRouter();
  // const dispatch = useDispatch();
  // console.log(query.location);
  // const { data, error } = useSWR(() => query.location && `/api/search/${query.location}`, fetcher);
  // const data = fetch(`/api/search/${query.location}`).then(response => response.json()).then(res => res);

  const [ads, setAds] = React.useState(null);
  console.log(query?.minsquare, query?.maxsquare);

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
        header={<Header userNavMenu={navMainData} token={token || tokenT} />}
        footer={
          <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
        }
      >
        <Search>
          <SearchBox>
            <Input
              width="620px"
              margin="0 16px 0 0"
              type="text"
              placeholder="Enter ID or Property title here..."
              height="38px"
              onChange={e => handleInputChange(e)}
              value={searchQuery}
            />
            <SearchCart onClickSearch={() => getSearch()} />
          </SearchBox>
          <div className="head">
            <H1 margin="26px 0 22px 0 ">Rent 1,2 bedroom appartments in Limassol</H1>

            <FavoritesHead>
              <H2 margin="0 9px 0 0">9 appartments found;</H2>
              <H2 color="#00A9B0">show on map</H2>
              <ButtonPrimary background="#fff" padding="4px 10px" color="#00A9B0">
                {' '}
                Newest first <Sorting />
              </ButtonPrimary>
            </FavoritesHead>
          </div>
          <>
            {/* {searchResult.result !== '' */}
            {/* // ? searchResult.result.map(obj => ( */}
            <FavCard
            // key={obj.id}
            >
              <div className="img" />
              <div className="desc">
                <H2 fontSize="28px" fontWeight="bold">
                  {/* {obj.ad_name} */}
                </H2>
                <H3 color="#00A9B0" margin="4px 0 42px 0" textDecorationLine="underline">
                  {/* {obj.location.district} */}
                </H3>
                <H2>3 bedrooms, 72 m2</H2>
                <H2 fontSize="28px" margin="8px 0 25px 0">
                  1 000 000 €{' '}
                </H2>
                <H3 color="#7E7E7E">
                  Luxury apartment for sale in Strovolos, Nicosia. The building is comprised of two
                  floors with total of 6 apartments (3 apartments per floor) and features high
                  standards and modern design.
                </H3>
              </div>
              <div className="info">
                <div className="infoImg" />
                <div>
                  <H3 margin="0 0 50px 0">Lighthouse</H3>
                  <H4 color="#7E7E7E">Language:</H4>
                  <H4>English, Russian</H4>
                </div>
                <ButtonPrimary background="#00A9B0" width="175px" height="32px" color="#FAFAFA">
                  +357 220 52 ...
                </ButtonPrimary>
                <H3 color="#BCBABE" margin="auto 0 0 0">
                  posted 3 month ago
                </H3>
              </div>
            </FavCard>
            {/* ))
              // : 'Не найдено'} */}
          </>
        </Search>
      </MainTemplate>
    </Container>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default SearchResultPage;
