/* eslint-disable no-nested-ternary */
// import ErrorPage from 'next/error';
// import { GetServerSideProps } from 'next';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import shortid from 'shortid';
import React from 'react';

import PageNotFound from '../404';
import { Header, Footer, navMainData } from '../../features/common';
import { filterPropertyItems, filterDistrictItems } from '../../features/filters/lib';
// import { wrapper } from '../../features/common/store';
// import { runInThisContext } from 'vm';
// import { RecommendedAdsItem, LoadingRecommendedBlock } from '../../features/control-cards';

import {
  MainTemplate,
  CenterContentTemplate,
  ContainerAdaptive,
  ButtonPrimary,
  RedHeart,
  Share,
  Child,
  Pet,
  Bath,
  Fire,
  Wifi,
  Kitchen,
  Parking,
  Pool,
  Tv,
  LiName,
} from '../../ui';
import { H1, H2, Li } from '../../ui/adding-ad';

const AddWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
`;
const BreadCrumbs = styled.div`
  margin-top: 6px;
`;
const BottomLine = styled.div`
  border-bottom: 1px solid #000;
  margin: 20px 0;
`;
const IconWrap = styled.div`
  background: #a1d6e2;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  padding: 6px 5px;
`;
const FlexWrap = styled.div`
  display: flex;
  gap: 1rem;
  > button svg {
    margin: 0px 5px -3px 0;
  }
`;
const LiWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  .liWithIcon {
    display: flex;
    > svg {
      margin: 18px 8px 0 0;
    }
  }
`;
const LeftBlock = styled.div`
  background: #fff;
  padding: 0 24px 24px 24px;
  width: 66%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  >img {
    width: 100%;
    margin-top: 10px;
  }
  >h3 {
    margin: 0;
  }
  .previewWrap {
    display: flex;
    gap: 0.50rem;
  }
  .photoPreview {
    width: 104px;
    height: 104px;
    background: #f1f1f2;
  }
  }
`;
const DescBlock = styled.div`
  > p {
    margin: 15px 0 0 0;
    font-size: 18px;
    line-height: 26px;
    color: #1f1f1f;
  }
`;
const InfoBlock = styled.div`
  > ul li svg {
    margin-right: 10px;
  }
`;
const RightBlock = styled.div`
  padding: 22px 20px;
  background: #fff;
  width: 32%;
  height: 620px;
`;
const BottomBlock = styled.div`
  margin-top: 2rem;
  padding: 22px 20px;
  background: #fff;
  flex-basis: 100%;
  // flex-direction: column;
  flex-basis: 100%;
  > h1 {
    margin: 30px 0;
  }
`;
const CardsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > div {
    flex-basis: calc((100% / 4) - 1rem);
  }
  > div > img {
    width: 100%;
    max-width: 300px;
    height: 180px;
  }
  > div > h1 {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #1f1f1f;
  }
  > div > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    color: #00a9b0;
  }
  > div > h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #4b4b4b;
  }
`;

function MyAdPage({ token, ad }) {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  // let iconName = foo ? bar : foobar;

  // const router = useRouter();
  // console.log(token, ad, ad.description);
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token || tokenT} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContentTemplate>
        <ContainerAdaptive display="block" background="#F1F1F2" padding="0px 20px" margin="0 auto">
          <BreadCrumbs>Breadcrumbs / Breadcrumbs / Breadcrumbs</BreadCrumbs>
          <AddWrap>
            <LeftBlock>
              <H1>{ad.title}</H1>
              <h3>
                {ad.city}, {ad.street}
              </h3>
              <FlexWrap>
                <ButtonPrimary background="#A1D6E2" padding="0 12px" color="#fff" radius="500px">
                  <RedHeart />
                  Add to favorites
                </ButtonPrimary>
                <IconWrap>
                  <Share />
                </IconWrap>
              </FlexWrap>
              <img alt="string" src="/images/Photo.svg" />
              <div className="previewWrap">
                <div className="photoPreview" />
                <div className="photoPreview" />
                <div className="photoPreview" />
                <div className="photoPreview" />
                <div className="photoPreview" />
                <div className="photoPreview" />
              </div>
              <BottomLine />

              <DescBlock>
                <H2>Description</H2>
                <p>{ad.description}</p>
              </DescBlock>
              <BottomLine />
              <InfoBlock>
                <H2>General information</H2>
                <ul>
                  <Li>
                    <LiName light>Children / pets policy</LiName>
                    <LiName light color="#000">
                      <Child />
                      Allowed with children
                    </LiName>
                    <LiName light color="#000">
                      <Pet />
                      Allowed with pets
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Facilities</LiName>
                    <LiWrap>
                      {Array.from(
                        [
                          'Kitchen furnished',
                          'Smart TV',
                          'WI-FI',
                          'Bath',
                          'Common pool',
                          'Parking',
                          'Fireplace',
                        ],
                        (name, idx) => (
                          <div className="liWithIcon">
                            {name === 'Kitchen furnished' ? (
                              <Kitchen />
                            ) : name === 'Smart TV' ? (
                              <Tv />
                            ) : name === 'WI-FI' ? (
                              <Wifi />
                            ) : name === 'Bath' ? (
                              <Bath />
                            ) : name === 'Common pool' ? (
                              <Pool />
                            ) : // eslint-disable-next-line no-nested-ternary
                            name === 'Parking' ? (
                              <Parking />
                            ) : name === 'Fireplace' ? (
                              <Fire />
                            ) : (
                              <></>
                            )}

                            <LiName light color="#000" key={`${shortid.generate()}type${idx}`}>
                              {name}
                            </LiName>
                          </div>
                        ),
                      )}
                    </LiWrap>
                  </Li>
                  <BottomLine />
                  <Li>
                    <LiName light>Floor</LiName>
                    <LiName light color="#000">
                      4 th / 12
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Year of building</LiName>
                    <LiName light color="#000">
                      1986
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Name of building</LiName>
                    <LiName light color="#000">
                      Sample name of Building
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Elevator</LiName>
                    <LiName light color="#000">
                      Yes
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Brand new</LiName>
                    <LiName light color="#000">
                      Yes
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Condition</LiName>
                    <LiName light color="#000">
                      Design
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Furnishing</LiName>
                    <LiName light color="#000">
                      Semi-furnished
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Suitable for children</LiName>
                    <LiName light color="#000">
                      Yes
                    </LiName>
                  </Li>
                  <Li>
                    <LiName light>Suitable for pets</LiName>
                    <LiName light color="#000">
                      no
                    </LiName>
                  </Li>
                </ul>
              </InfoBlock>
            </LeftBlock>
            <RightBlock />
            <BottomBlock>
              <H2>Also recommended</H2>
              <CardsWrap>
                <div>
                  <img alt="string" src="/images/Photo.svg" />
                  <h1>New apartment in strov</h1>
                  <h2>€ 1 000 000</h2>
                  <h3>3 bedrooms • 72 m2</h3>
                </div>
                <div>
                  <img alt="string" src="/images/Photo.svg" />
                  <h1>New apartment in strov</h1>
                  <h2>€ 1 000 000</h2>
                  <h3>3 bedrooms • 72 m2</h3>
                </div>
                <div>
                  <img alt="string" src="/images/Photo.svg" />
                  <h1>New apartment in strov</h1>
                  <h2>€ 1 000 000</h2>
                  <h3>3 bedrooms • 72 m2</h3>
                </div>
                <div>
                  <img alt="string" src="/images/Photo.svg" />
                  <h1>New apartment in strov</h1>
                  <h2>€ 1 000 000</h2>
                  <h3>3 bedrooms • 72 m2</h3>
                </div>
              </CardsWrap>
            </BottomBlock>
          </AddWrap>
        </ContainerAdaptive>
        {/* <H1>Объявление {ad.AboutObject.bathrooms.map(elem => elem.name)}</H1> */}
      </CenterContentTemplate>
    </MainTemplate>
  );
}

export async function getServerSideProps({ req, _res, params }) {
  let formBody: any = [];
  const encodedKey = encodeURIComponent('id');
  const encodedValue = encodeURIComponent(params.id);
  formBody.push(`${encodedKey}=${encodedValue}`);
  formBody = formBody.join('&');

  const response = await fetch('https://api.rentup.cy/json?func=mobile&action=getOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  });
  const ad = await response.json();
  return { props: { token: req.cookies.fcd || '', ad: ad[0] } };
}

export default MyAdPage;
