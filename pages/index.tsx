/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import React from 'react';
// import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import { END } from 'redux-saga';
// import shortid from 'shortid';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// import { wrapper } from '../features/common/store';
import { Header, Footer, navMainData } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import ContainerSeo from '../lib/seo-container/container';
// import { blockRoutes } from '../lib/routes-private';
// import { useDispatchCall } from '../lib/custom-hooks';
import { MainTemplate, CenterContentTemplate, ContainerAdaptive } from '../ui';
// import { SearchCart } from '../features/cards-search';
import { SearchMap } from '../features/search-map';
import { SearchRun } from '../features/search-list';
import { Filters } from '../features/filters/components';
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
