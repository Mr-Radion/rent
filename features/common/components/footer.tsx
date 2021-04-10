import React from 'react';
import styled from 'styled-components';
import { BottomNav } from './navbar';
import {
  ContainerAdaptive,
  LogoWrapper,
  LogoDefault,
  LogoMini,
  LinkPrimary,
  OptionPrimary,
  MobileVersion,
  FacebookAuthIcon,
  VkontakteAuthIcon,
  InstagramAuthIcon,
} from '../../../ui';

const FooterBox = styled.div`
  hr:first-child {
    margin-top: 0;
    margin-bottom: 16px;
  }
  hr:nth-child(3) {
    margin-top: 24px;
    margin-bottom: 32px;
  }
`;

const FooterAbout = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 320px) {
    flex-wrap: wrap;
  }
  font-weight: bold;
  > ul {
    display: flex;
    font-weight: normal;
    // align-items: center;
    padding-top: 21px;
    justify-content: space-between;
    margin-left: 31px;
    width: 255px;
  }
  > span {
    display: block;
    margin-left: 192px;
    @media (max-width: 1024px) {
      margin: 0 auto;
    }
    > span {
      display: block;
      margin-left: 6px;
      font-weight: 900;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 0.5px;
      color: #bcbabe;
    }
  }
  .social-networks__block {
    margin-left: 134.5px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      margin: 0 auto;
    }
    @media (max-width: 320px) {
      flex-basis: calc(100% - 1rem);
    }
    margin-top: 16px;
  }
  .footer-nav {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .full-logo {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mini-logo {
    display: none;
    @media (max-width: 767px) {
      display: block;
      width: 50px;
    }
  }
  @media (max-width: 1230px) {
    justify-content: start;
  }
`;

type FooterProps = {
  menuItemCities: any;
  menuItemTypeProperty: any;
};

export function Footer({ menuItemCities, menuItemTypeProperty }: FooterProps): JSX.Element {
  // const p: any = '2.8125rem 1.25rem 6rem';
  return (
    <FooterBox>
      <ContainerAdaptive padding="80px 26px 40px" margin="0 auto">
        <hr />
        <BottomNav menuItemCities={menuItemCities} menuItemTypeProperty={menuItemTypeProperty} />
        <hr />
        <FooterAbout>
          <LogoWrapper>
            <LogoDefault className="full-logo" />
            <LogoMini className="mini-logo" />
          </LogoWrapper>
          <ul className="footer-nav">
            <OptionPrimary>
              <LinkPrimary href="/" color="#00A9B0">
                About Us
              </LinkPrimary>
            </OptionPrimary>
            <OptionPrimary>
              <LinkPrimary href="/" color="#00A9B0">
                Contacts
              </LinkPrimary>
            </OptionPrimary>
            <OptionPrimary>
              <LinkPrimary href="/" color="#00A9B0">
                Help
              </LinkPrimary>
            </OptionPrimary>
          </ul>
          <span>
            <MobileVersion />
            <span>Coming soon</span>
          </span>
          <div className="social-networks__block">
            <div>
              <FacebookAuthIcon />
            </div>
            <div>
              <VkontakteAuthIcon />
            </div>
            <div>
              <InstagramAuthIcon />
            </div>
          </div>
        </FooterAbout>
      </ContainerAdaptive>
    </FooterBox>
  );
}
