import React from 'react';
// import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AuthenticationFormModal } from '../../authenticate-form';
import { UserMenu } from './user-menu';
import {
  LinkButton,
  ContainerAdaptive,
  LogoWrapper,
  Logo,
  Heart,
  Bluеbell,
  ButtonPrimary,
} from '../../../ui';

const HeaderBox = styled.div`
  display: flex;
  // max-width: 1901px;
`;

const HeaderRight = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  // @media (max-width: 700px) {
  //   display: none;
  // }
`;

type HeaderProps = {
  token: string | null;
  userNavMenu: any;
};

const HeartBox = styled.div`
  margin-right: 31px;
`;

const BluеbellBox = styled.div`
  margin-right: 31px;
`;

export function FavoritesDropdown(): JSX.Element {
  return (
    <HeartBox>
      <Heart width="21" height="19" />
    </HeartBox>
  );
}

export function NoticeDropDown(): JSX.Element {
  return (
    <BluеbellBox>
      <Bluеbell width="18" height="20" />
    </BluеbellBox>
  );
}

export const ToggleMenuSign = ({ userNavMenu, toggle, token }: any) => {
  // const { tokenT, status } = useSelector(({ userAuth }: any) => userAuth);
  // const router = useRouter();
  // let auth = status === 'LOADED' ? '' : tokenT;
  // console.log(tokenT);
  // console.log(token);
  // if (router.pathname === '/404') auth = token;
  return (
    <>
      {token ? (
        <UserMenu userMenuItems={userNavMenu} />
      ) : (
        <ButtonPrimary
          width="5.751rem"
          background="#CDE0E4"
          height="2.251rem"
          onClick={toggle}
          color="#1995AD"
          border-color="#1995AD"
          fontSize="17px"
        >
          Sign In
        </ButtonPrimary>
      )}
    </>
  );
};

export const Header: React.FC<any> = ({ userNavMenu, token }: HeaderProps) => {
  const [opened, setOpened] = React.useState(false);
  const close = () => setOpened(() => false);
  const toggle = () => setOpened(isOpen => !isOpen);

  return (
    <>
      <HeaderBox>
        <ContainerAdaptive padding="10px 26px" margin="0 auto">
          <LogoWrapper>
            <Logo width="194" height="54" />
          </LogoWrapper>
          <HeaderRight>
            <FavoritesDropdown />
            <NoticeDropDown />
            <LinkButton
              width="13.625rem"
              height="2.251rem"
              color="#F1F1F2"
              background="#00A9B0"
              marginRight="20px"
              href="/adding-ad"
            >
              + Add property
            </LinkButton>
            <div>
              <ToggleMenuSign userNavMenu={userNavMenu} toggle={toggle} token={token} />
            </div>
          </HeaderRight>
          <>
            {opened && (
              <>
                <AuthenticationFormModal opened={opened} onClose={close} />
              </>
            )}
          </>
        </ContainerAdaptive>
      </HeaderBox>
    </>
  );
};
