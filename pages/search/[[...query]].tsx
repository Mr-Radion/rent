// import ErrorPage from 'next/error';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Container from '../../lib/seo-container/container';
import { numberIntervalsFormatted } from '../../lib/formatted';
import { SearchRun } from '../../features/search-list';
import {
  MainTemplate,
  ButtonPrimary,
  H1,
  H2,
  H3,
  H4,
  Sorting,
  PhotoBox,
  Text,
  TextSpan,
} from '../../ui';
// import { fetchSearchList } from '../../features/search-list/ducks';
import { Header, Footer, navMainData } from '../../features/common';
import { filterPropertyItems, filterDistrictItems } from '../../features/filters/lib';
import { Filters } from '../../features/filters/components';

const SearchBox = styled.div`
  // margin-left: auto;
  padding: 20px 0;
  display: flex;
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

function SearchResultPage({ token }) {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  const { query } = useRouter();
  // const dispatch = useDispatch();
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
      .then(res => setAds(res.results))
      .catch(error => console.log(error));
  }, [query]);

  // const searchResult = useSelector(({ searchListResult }: any) => searchListResult);
  // const [searchClick, setSearchClick] = React.useState<boolean>(false);

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
            <Filters page="searchList" />
            <SearchRun />
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
          <div>
            <>
              {ads &&
                ads.map(ad => (
                  <FavCard key={ad.id}>
                    <Link href={`/myad/${ad.id}`}>
                      <a target="_blank">
                        <PhotoBox
                          src={ad.image_url}
                          className="img"
                          backgroundColor="#000"
                          height="316px"
                          width="316px"
                          margin="0 30px 0 50px"
                        />
                      </a>
                    </Link>
                    <div className="desc">
                      <H2 fontSize="28px" fontWeight="bold">
                        {ad.ad_name}
                      </H2>
                      <H3 color="#00A9B0" margin="4px 0 42px 0" textDecorationLine="underline">
                        {ad.location.district}
                      </H3>
                      <H2>
                        {ad.bedrooms} bedrooms, {ad.square} m2
                      </H2>
                      <H2 fontSize="28px" margin="8px 0 25px 0">
                        {numberIntervalsFormatted(ad.price)} €{' '}
                      </H2>
                      <Text color="#7E7E7E">{ad.exposition}</Text>
                    </div>
                    <div className="info">
                      <div className="infoImg" />
                      <div>
                        <H3 margin="0 0 50px 0">Lighthouse</H3>
                        <H4 color="#7E7E7E">Language:</H4>
                        <H4>English, Russian</H4>
                      </div>
                      <ButtonPrimary
                        background="#00A9B0"
                        width="175px"
                        height="32px"
                        color="#FAFAFA"
                      >
                        {ad.telephone_number}
                      </ButtonPrimary>
                      <TextSpan color="#BCBABE" margin="auto 0 0 0">
                        posted 3 month ago
                      </TextSpan>
                    </div>
                  </FavCard>
                ))}
            </>
          </div>
        </Search>
      </MainTemplate>
    </Container>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default SearchResultPage;
