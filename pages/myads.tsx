/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import PageNotFound from './404';
// import { auth } from '../features/authenticate-form';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import {
  MainTemplate,
  ButtonPrimary,
  Delete,
  Sorting,
  H2,
  H3,
  H4,
  OptionPrimary,
  OpenAd,
  Edit,
  Promote,
  ShareAds,
} from '../ui';
import { useOnClickOutside } from '../lib/custom-hooks';

const AdsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 61px 20px;
  width: 100%;
  background: #fff;
`;
const AdsHead = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    margin-left: auto;
  }
  .dropDownFilter {
    padding: 20px 60px 20px 30px;
    background: #fff;
    position: absolute;
    right: 20px;
    margin-top: 44px;
    z-index: 9;
    > ul li {
      font-weight: normal;
      font-size: 16px;
      color: #1f1f1f;
      width: 130px;
      text-align: left;
    }
  }
`;
const AdCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 20px;
  margin: 24px 0;
  background: #fafafa;
  border: 1px solid #f1f1f2;
  border-radius: 8px;
  position: relative;
  .img {
    width: 224px;
    height: 224px;
    background: #000;
    margin-left: auto;
  }
  .leftBlock {
    width: 80%;
  }
  .info {
    display: flex;
    &__adress {
      display: flex;
    }
    &__search {
      display: flex;
      margin: 26px 0 24px;
      > div:nth-child(-n + 3) {
        margin-right: 32px;
      }
    }
    > a {
      display: flex;
    }
  }
  .actions {
    position: relative;
    > button svg {
      stroke: #00a9b0;
      margin-right: 10px;
    }
  }
  .archived {
    background: #fafafa;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &__label {
      color: #fff;
      padding: 8px 0;
      text-align: center;
      max-width: 183px;
      flex-basis: 100%;
      height: 36px;
      background: #bcbabe;
      border-radius: 4px;
    }
  }
`;

function MyAdsPage({ token }): JSX.Element {
  if (!token) {
    return <PageNotFound />;
  }
  const userMenuRef = React.useRef();
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  useOnClickOutside(userMenuRef, () => setVisiblePopup(false));
  const [ads, setAds] = React.useState([]);

  React.useEffect(() => {
    const data = fetch('https://api.rentup.cy/json?func=mobile&action=getOrder');
    data.then(response => response.json().then(res => setAds(res)));
  }, []);

  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContent
        mainNavItem={<MainNav mainNavList={navMainData} />}
        align="flex-start"
        background="#FAFAFA"
      >
        <AdsWrap>
          <AdsHead>
            <ButtonPrimary
              background="transperent"
              padding="4px 10px"
              ref={userMenuRef}
              onClick={() => setVisiblePopup(!visiblePopup)}
              color="#00A9B0"
            >
              {' '}
              Newest first <Sorting />
              {visiblePopup && (
                <div className="dropDownFilter">
                  <ul>
                    <OptionPrimary>Newest first</OptionPrimary>
                    <OptionPrimary padding="16px 0">Price: lowest</OptionPrimary>
                    <OptionPrimary>Price: highest</OptionPrimary>
                  </ul>
                </div>
              )}
            </ButtonPrimary>
          </AdsHead>
          {/* <Border borderBottom="1px solid #00a9b0" /> */}

          {ads.map(ad => (
            <AdCard key={ad.id}>
              <div className="leftBlock">
                {ad.archived ? (
                  <>
                    <div className="archived" />
                    <div className="archived__label">Archived</div>{' '}
                  </>
                ) : (
                  <></>
                )}
                <div className="info">
                  <Link href={`/myad/${ad.id}`}>
                    <a target="_blank">
                      <H2 fontWeight="bold">{ad.title}</H2>
                      <H2 fontWeight="bold">
                        &nbsp; &bull; {ad.bedrooms} bedrooms, {ad.square} m2
                      </H2>
                      <H2 fontWeight="bold">&nbsp; &bull; {ad.price_month} € </H2>
                    </a>
                  </Link>
                </div>
                <H4 className="info__adress" color="#00A9B0" margin="8px 0 0 0">
                  <Link href={`/myad/${ad.id}`}>
                    <a target="_blank">
                      {ad.city}, {ad.street}
                    </a>
                  </Link>
                </H4>
                <div className="info__search">
                  <div>
                    <H2 fontSize="36px" color="#00A9B0">
                      25
                    </H2>
                    <H3 margin="8px 0 0 0">Hits in search</H3>
                  </div>
                  <div>
                    <H2 fontSize="36px" color="#00A9B0">
                      25
                    </H2>
                    <H3 margin="8px 0 0 0">Hits in search</H3>
                  </div>
                  <div>
                    <H2 fontSize="36px" color="#00A9B0">
                      25
                    </H2>
                    <H3 margin="8px 0 0 0">Hits in search</H3>
                  </div>
                  <div>
                    <H2 fontSize="36px" color="#00A9B0">
                      25
                    </H2>
                    <H3 margin="8px 0 0 0">Hits in search</H3>
                  </div>
                </div>
                <div className="actions">
                  {!ad.archived ? (
                    <>
                      <ButtonPrimary
                        margin="0 20px"
                        background="#FAFAFA"
                        padding="8px 10px"
                        color="#00A9B0"
                      >
                        <Promote />
                        Promote
                      </ButtonPrimary>
                      <ButtonPrimary
                        margin="0 20px"
                        background="#FAFAFA"
                        padding="8px 10px"
                        color="#00A9B0"
                      >
                        <Edit />
                        Edit
                      </ButtonPrimary>
                      <ButtonPrimary
                        margin="0 20px"
                        background="#FAFAFA"
                        padding="8px 10px"
                        color="#00A9B0"
                      >
                        <OpenAd />
                        Open Ad
                      </ButtonPrimary>
                      <ButtonPrimary
                        margin="0 20px"
                        background="#FAFAFA"
                        padding="8px 10px"
                        color="#00A9B0"
                      >
                        <ShareAds />
                        Share
                      </ButtonPrimary>
                    </>
                  ) : (
                    <>
                      <ButtonPrimary
                        margin="0 20px"
                        background="#FAFAFA"
                        padding="8px 10px"
                        color="#00A9B0"
                      >
                        <Delete />
                        Reopen
                      </ButtonPrimary>
                    </>
                  )}

                  <ButtonPrimary
                    margin="0 20px"
                    background="#FAFAFA"
                    padding="8px 10px"
                    color="#00A9B0"
                  >
                    <Delete />
                    Delete
                  </ButtonPrimary>
                </div>
              </div>
              <div className="img" />
            </AdCard>
          ))}
        </AdsWrap>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default MyAdsPage;
