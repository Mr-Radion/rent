/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import React from 'react';
// import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import { END } from 'redux-saga';
import shortid from 'shortid';
import { useRouter } from 'next/router';
// import Link from 'next/link';

// import { wrapper } from '../features/common/store';
import { Header, Footer, navMainData } from '../features/common';
import ContainerSeo from '../lib/seo-container/container';
// import { blockRoutes } from '../lib/routes-private';
// import { useDispatchCall } from '../lib/custom-hooks';
import {
  MainTemplate,
  CenterContentTemplate,
  ContainerAdaptive,
  ButtonPrimary,
  Input,
} from '../ui';
// import { SearchCart } from '../features/cards-search';
import { SearchMap } from '../features/search-map';
import {
  filterPropertyItems,
  filterBedroomsItems,
  filterNavItems,
  filterDistrictItems,
} from '../features/filters/lib';
import {
  FilterTypeProperty,
  FilterPrice,
  FilterBedrooms,
  FilterArea,
  FilterLocation,
} from '../features/filters/components';
import {
  setFilterTypePropertyBy,
  setFilterPriceBy,
  setFilterAreaBy,
  setFilterBedroomsCounterBy,
  setFilterBedroomsTypeBy,
  setFilterLocationBy,
} from '../features/filters/ducks';
import {
  RecommendedAdsItem,
  // LoadingRecommendedBlock,
} from '../features/recommend-cards/components';
import { fetchAdsRecommended } from '../features/recommend-cards/ducks';

const H1 = styled.h1`
  font-weight: bold;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const HeaderContentBox = styled.section`
  background-image: url('/images/background/home-header.svg');
  // width: 1848px;
  width: 100%;
  max-width: 1864px;
  height: 100%;
  // max-height: 530px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  @media (max-width: 768px) {
    background: #e5e5e5;
  }
`;

const AdsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-flow: column wrap;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const FiltersBox = styled.div`
  .mobileFilter {
    @media (min-width: 769px) {
      display: none;
    }
    > button:nth-child(n + 2):nth-child(-n + 5) {
      margin-right: 1rem;
    }
  }
`;

const FilterNav = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    > button:nth-child(-n + 2) {
      background: #fff;
    }
  }
  @media (max-width: 320px) {
    > button:nth-child(-n + 2) {
      flex-basis: 48%;
    }
  }
`;

const FilterList = styled.div`
  display: flex;
  margin-top: 16px;
  // box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  > div .label button {
    border: 1px solid #bcbabe;
    border-right: none;
    background: #f1f1f2;
    border-top: none;
    border-bottom: none;
  }
  > div:first-child .label button {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 2px solid transparent;
    @media (max-width: 768px) {
      background: #fff;
    }
  }
  > div:nth-child(n+4):nth-child(-n+6) .label button {
    @media (max-width: 768px) {
      display: none;
      }
    }
  }

  > div:last-child .label button {
    border-right: 2px solid #bcbabe;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: 2px solid transparent;
    @media (max-width: 768px) {
      background: #fff;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    > div .label button {
      border: 1px solid transparent;
      border-radius: 4px;
      background: #f1f1f2;
      border-top: none;
      border-bottom: none;
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  gap: 3rem;
  margin: 29px 0 0 auto;
  .searchLink {
    border-radius: 4px;
  }
  > a {
    font-size: 18px;
    min-width: 136px;
    height: 3.314rem;
    color: #f1f1f2;
    background: linear-gradient(70.2deg, #00a9b0 0%, #76dfc7 100%);
    font-weight: bold;
    padding-top: 15px;
    text-align: center;
    border-radius: 4px;
  }
  @media (max-width: 320px) {
    margin: 29px auto 0 auto;
  }
  @media (max-width: 530px) {
    gap: 1rem;
    margin: 29px auto 0;
    > a {
      flex-basis: 48%%;
    }
    > button {
      flex-basis: 48%;
      max-width: 140px;
    }
  }
  @media (max-width: 768px) {
    > button {
      background: #fff;
    }
  }
`;

const RecommendBox = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 1904px;
`;

export const RecommendCard = ({ recommendedCardData }) => (
  <RecommendBox>
    <ContainerAdaptive padding="34px 20px 0" tablet="0 20px" maxWidth="1550px" margin="0 auto">
      <H1>Recommended</H1>
      <AdsList>
        {recommendedCardData && <RecommendedAdsItem cardItems={recommendedCardData} />}
      </AdsList>
    </ContainerAdaptive>
  </RecommendBox>
);

export const Filters = React.memo(() => {
  const dispatch = useDispatch();
  const {
    filterTypePropertyBy,
    filterBedroomsCounterBy,
    filterBedroomsTypeBy,
    filterLocationBy,
  } = useSelector(({ filters }: any) => filters);
  const [selectedFilterNavigationPoint, setFilterNavigationPoint] = React.useState('Buy');

  const toggleFilterNavigationPoint = React.useCallback(point => {
    setFilterNavigationPoint(point);
  }, []);

  const onSelectFilterPropertyType = React.useCallback(name => {
    dispatch(setFilterTypePropertyBy(name));
  }, []);

  const onSelectFilterPrice = React.useCallback(price => {
    dispatch(setFilterPriceBy(price));
  }, []);

  const onSelectClickFilterArea = React.useCallback(area => {
    dispatch(setFilterAreaBy(area));
  }, []);

  const onSelectFilterBedroomsCounter = React.useCallback(bedrooms => {
    dispatch(setFilterBedroomsCounterBy(bedrooms));
  }, []);

  const onSelectFilterBedroomsType = React.useCallback(bedrooms => {
    dispatch(setFilterBedroomsTypeBy(bedrooms));
  }, []);

  const onSelectFilterLocation = React.useCallback(bedrooms => {
    dispatch(setFilterLocationBy(bedrooms));
  }, []);

  return (
    <FiltersBox>
      <FilterNav>
        {filterNavItems &&
          filterNavItems.map((item, index) => (
            <ButtonPrimary
              key={`${item.point}_${index + 1}`}
              fontSize="16px"
              minWidth="120px"
              height="40px"
              color={item.point === selectedFilterNavigationPoint ? '#1995AD' : '#4B4B4B'}
              background="#f1f1f2"
              backdropFilter="blur(8px)"
              // marginRight="32px"
              type="button"
              onClick={() => toggleFilterNavigationPoint(item.point)}
              onKeyUp={() => toggleFilterNavigationPoint(item.point)}
              focus={selectedFilterNavigationPoint === item.point ? index + 1 : undefined}
            >
              {item.point}
            </ButtonPrimary>
          ))}
      </FilterNav>
      <FilterList>
        {selectedFilterNavigationPoint === 'Buy' && (
          <>
            <FilterTypeProperty
              onClickFilterPropertyType={onSelectFilterPropertyType}
              activeLabel={filterTypePropertyBy}
              items={filterPropertyItems}
            />
            <div className="mobileFilter">
              <p>Rooms</p>
              <>
                {Array.from(['studio', '1', '2', '3', '4'], (type, idx) => (
                  <ButtonPrimary
                    fontSize="16px"
                    minWidth="36px"
                    padding="0 12px"
                    height="36px"
                    background="#fff"
                    color="#1F1F1F"
                    fontWeight="normal"
                    type="button"
                    key={`${shortid.generate() + 1}type${idx}`}
                  >
                    {type}
                  </ButtonPrimary>
                ))}
              </>
            </div>
            <div className="mobileFilter">
              <p>Price</p>
              <Input
                background="#fff"
                placeholder="from"
                width="105px"
                marginRight="1rem"
                border="none"
              />
              <Input
                background="#fff"
                placeholder="to"
                width="105px"
                marginRight="1rem"
                border="none"
              />
            </div>
            {/* <div className="desktopFilter"> */}
            <FilterBedrooms
              onClickFilterBedroomsCounter={onSelectFilterBedroomsCounter}
              onClickFilterBedroomsType={onSelectFilterBedroomsType}
              activeLabelCounter={filterBedroomsCounterBy}
              activeLabelType={filterBedroomsTypeBy}
              items={filterBedroomsItems}
            />
            <FilterPrice onClickFilterPrice={onSelectFilterPrice} />
            <FilterArea onClickFilterArea={onSelectClickFilterArea} />
            {/* </div> */}
            <FilterLocation
              onClickFilterLocation={onSelectFilterLocation}
              activeAddress={filterLocationBy}
              items={filterDistrictItems}
            />
          </>
        )}
        {selectedFilterNavigationPoint === 'Rent' && (
          <>
            <FilterTypeProperty
              onClickFilterPropertyType={onSelectFilterPropertyType}
              activeLabel={filterTypePropertyBy}
              items={filterPropertyItems}
            />
            <FilterBedrooms
              onClickFilterBedroomsCounter={onSelectFilterBedroomsCounter}
              onClickFilterBedroomsType={onSelectFilterBedroomsType}
              activeLabelCounter={filterBedroomsCounterBy}
              activeLabelType={filterBedroomsTypeBy}
              items={filterBedroomsItems}
            />
            <FilterPrice onClickFilterPrice={onSelectFilterPrice} />
            <FilterArea onClickFilterArea={onSelectClickFilterArea} />
            <FilterLocation
              onClickFilterLocation={onSelectFilterLocation}
              activeAddress={filterLocationBy}
              items={filterDistrictItems}
            />
          </>
        )}
      </FilterList>
    </FiltersBox>
  );
});

export const SearchRun = () => {
  const router = useRouter();
  const {
    filterLocationBy,
    filterTypePropertyBy,
    filterPriceBy,
    filterBedroomsCounterBy,
    filterBedroomsTypeBy,
    filterSquareBy,
  } = useSelector(({ filters }: any) => filters);

  const locationRoute =
    filterLocationBy.length !== 0
      ? `?location=${String(filterLocationBy).toLowerCase()}`
      : 'all cities';
  const typePropertyRoute =
    filterTypePropertyBy.length !== 0
      ? `&typeProperty=${String(filterTypePropertyBy).toLowerCase()}`
      : '';
  const minprice = filterPriceBy.from ? `&minprice=${filterPriceBy.from}` : '';
  const maxprice = filterPriceBy.to ? `&maxprice=${filterPriceBy.to}` : '';
  const minsquare = filterSquareBy.from ? `&minsquare=${filterSquareBy.from}` : '';
  const maxsquare = filterSquareBy.to ? `&maxsquare=${filterSquareBy.to}` : '';
  const room1 = filterBedroomsCounterBy.includes(1) ? '&room1=1' : '';
  const room2 =
    filterBedroomsCounterBy.includes(2) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 2 &&
      filterBedroomsCounterBy[0] < 2)
      ? '&room2=1'
      : '';
  const room3 =
    filterBedroomsCounterBy.includes(3) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 3 &&
      filterBedroomsCounterBy[0] < 3)
      ? '&room3=1'
      : '';
  const room4 =
    filterBedroomsCounterBy.includes(4) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 3 &&
      filterBedroomsCounterBy[0] < 3)
      ? '&room4=1'
      : '';
  const room5 = filterBedroomsCounterBy.includes(5) ? '&room5=1' : '';
  const bedroomsType =
    filterBedroomsTypeBy.length !== 0
      ? `&bedroomsType=${filterBedroomsTypeBy[0].toLowerCase()}`
      : '';

  const httpQuery = `${typePropertyRoute && locationRoute}${
    typePropertyRoute && typePropertyRoute
  }${minprice && minprice}${maxprice && maxprice}${room1 && room1}${room2 && room2}${
    room3 && room3
  }${room4 && room4}${room5 && room5}${bedroomsType && bedroomsType}${minsquare && minsquare}${
    maxsquare && maxsquare
  }`;

  const onClickSearch = () => {
    router.push({
      pathname: '/search',
      search: `${httpQuery}`,
    });
  };

  return (
    <ButtonPrimary
      fontSize="18px"
      // width="9.5rem"
      minWidth="152px"
      height="3.314rem"
      color="#F1F1F2"
      background="linear-gradient(70.2deg, #00A9B0 0%, #76DFC7 100%)"
      onClick={onClickSearch}
      fontWeight="bold"
      radius="4px"
    >
      Search
    </ButtonPrimary>
  );
};

const IndexPage: React.FC<any> = React.memo(({ token }) => {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  // const { filterTypePropertyBy, filterLocationBy } = useSelector(({ filters }: any) => filters);
  const { recommendedCardData } = useSelector(({ recommendedCard }: any) => recommendedCard);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAdsRecommended());
  }, [token]);

  return (
    <ContainerSeo
      title="RentUp | Ads in cyprus: rental property, property for sale"
      descriptione="Recommended ads for the sale and rental of real estate"
      homePage
    >
      <MainTemplate
        header={<Header userNavMenu={navMainData} token={token || tokenT} />}
        footer={
          <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
        }
      >
        <CenterContentTemplate>
          <HeaderContentBox>
            <ContainerAdaptive
              padding="9.07% 9.57% 7.1% 9.57%"
              background="transparent"
              tablet="5% 10%"
              margin="0 auto"
            >
              <HeaderContent>
                <Filters />
                <SearchBox>
                  <SearchMap />
                  <SearchRun />
                  {/* <SearchCart onClickSearch={setSearchQuery} /> */}
                </SearchBox>
              </HeaderContent>
            </ContainerAdaptive>
          </HeaderContentBox>
          <RecommendCard recommendedCardData={recommendedCardData} />
        </CenterContentTemplate>
      </MainTemplate>
    </ContainerSeo>
  );
});

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     if (!store.getState().recommendedCard.recommendedCardData) {
//       store.dispatch(fetchAdsRecommended());
//       store.dispatch(END);
//     }
//     console.log(store.getState().authUser);
//     // @ts-ignore
//     await store.sagaTask.toPromise();

//     if (store.getState().recommendedCard.error) {
//       console.error('Failed to fetch ads.', store.getState().recommendedCard.error);
//       // throw new Error(store.getState().recommendedCard.error[0].message);
//     }

//     if (store.getState().recommendedCard.recommendedCardData) {
//       return {
//         props: {
//           recommendedCardData: store.getState().recommendedCard.recommendedCardData,
//         },
//       };
//     }

//     return {
//       props: {
//         recommendedCardData: [],
//       },
//     };
//   },
// );

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default IndexPage;
