/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import { MainTemplate, ContainerAdaptive, Input, ButtonPrimary } from '../ui';
import PageNotFound from './404';
// import { token } from '../features/authenticate-form/lib';

export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
`;

const LeftBlock = styled.div`
  width: 49%;
  gap: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  .img {
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 100%;
    margin: 0 60px 0 0 !important;
  }
  .userHead {
    display: flex;
    // flex-direction: column;
    > div {
      margin: 0;
    }
  }
  .changeProfile {
    display: flex;
    gap: 1rem;
    margin-bottom: 25px;
  }
  .idInfo > h1 {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #1f1f1f;
  }
  > div input {
    margin: 3px 0 5px;
  }
  > button {
    margin-top: 25px;
  }
  > div h4 {
    font-style: normal;
    margin: 0;
    font-size: 11px;

    color: #1f1f1f;
    opacity: 0.6;
  }
`;
const UserHeader = styled.div`
  display: flex;
  padding: 26px 20px;
  gap: 1rem;
  > h1 {
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #1f1f1f;
  }
`;
const RightBlock = styled.div`
  width: 49%;
  > div {
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
  div:first-child {
    margin-top: 0;
    margin-bottom: 16px;
  }
  > div h2 {
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #1f1f1f;
  }
  > div h1 {
    font-style: normal;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #1f1f1f;
  }
  > div h3 {
    font-style: normal;

    font-size: 16px;

    letter-spacing: 0.5px;
    text-decoration-line: underline;

    color: #00a9b0;
  }
`;
const BorderLine = styled.div`
  border: 1px solid #bcbabe;
`;

export function MyProfilePage({ token }): JSX.Element {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  if (!token) {
    return <PageNotFound />;
  }
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token || tokenT} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContent mainNavItem={<MainNav mainNavList={navMainData} />} marginTop="50px">
        <ContainerAdaptive padding="0 20px" background="#FAFAFA">
          <UserHeader>
            <Link href="/my-profile">
              <h1>Profile</h1>
            </Link>
            <Link href="/favorites">
              <h1>Favorites</h1>
            </Link>
            <Link href="/notifications">
              <h1>Notifications</h1>
            </Link>
            <Link href="/myads">
              <h1>My Ads</h1>
            </Link>
            <Link href="/my-wallet">
              <h1>My wallet</h1>
            </Link>
          </UserHeader>
          <ProfileWrap>
            <LeftBlock>
              <div className="userHead">
                <div className="img" />
                <div className="idInfo">
                  <h1>Name Surname</h1>
                  <h1>id 666666</h1>
                </div>
              </div>
              <BorderLine />
              <div className="changeProfile">
                <ButtonPrimary background="#00A9B0" height="32px" color="#FAFAFA" width="119px">
                  Change photo
                </ButtonPrimary>
                <ButtonPrimary background="#F63F3F" color="#FAFAFA" width="119px">
                  Remove photo
                </ButtonPrimary>
              </div>

              <div>
                <label>Name</label>
                <br />
                <Input width="262px" placeholder="Name" />
              </div>

              <div>
                <label>Surname</label>
                <br />
                <Input width="262px" placeholder="Surname" />
              </div>
              <div>
                <label>Date of Birth</label>
                <br />
                <Input width="262px" placeholder="" />
              </div>
              <div>
                <label>Languages</label>
                <br />
                <Input width="262px" placeholder="01.01.1900" />
                <h4>Select the languages in which you want to communicate</h4>
              </div>
              <ButtonPrimary background="#00A9B0" width="132px" height="32px" color="#FAFAFA">
                Save
              </ButtonPrimary>
            </LeftBlock>
            <RightBlock>
              <div>
                <h2>Phone number</h2>
                <h1>+7 900 000 00 00</h1>
                <h3>Change</h3>
                <BorderLine />
                <h2>E-mail</h2>
                <h1>example@google.com</h1>
                <h3>Change</h3>
              </div>
              <div>
                <h2>Change password</h2>
              </div>
            </RightBlock>
          </ProfileWrap>
        </ContainerAdaptive>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default MyProfilePage;
