import styled, { css, StyledComponent } from 'styled-components';
import { LinkPrimary } from '../../../ui';

const MainNavStyled: StyledComponent<any, any> = styled.nav`
  ${({ top }: any) =>
    top &&
    css`
      width: 135px;
      margin-left: 72px;
    `}
  ${({ bottom }: any) =>
    bottom &&
    css`
      width: 100%;
      margin-left: 0px;
      > ul:nth-child(2) {
        margin-top: 24px;
        width: 553px;
        @media (max-width: 600px) {
          width: auto;
        }
      }
      > ul:last-child {
        margin-top: 16px;
        width: 466px;
        @media (max-width: 600px) {
          width: auto;
        }
        // margin-bottom: 29px;
      }
    `}
`;

export const navTopData = [
  { endpoint: '/buy', title: 'Buy' },
  { endpoint: '/rent', title: 'Rent' },
];

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
`;

const NavListField = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
`;

const NavListItem = styled.li`
  display: flex;
  flex-direction: row;
  a {
    // padding-top: 16px;
  }
`;

export const LinkBottomMenu = styled(LinkPrimary)`
  font-weight: bold;
`;

const MainNavHeader = styled.div`
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

type PropsTopMenu = {
  menuItem: any;
};

export function TopNav({ menuItem }: PropsTopMenu): JSX.Element {
  return (
    <MainNavStyled top>
      <NavList>
        {menuItem &&
          menuItem.map((item: { endpoint: string; title: string }) => (
            <LinkPrimary
              fontWeight="900"
              fontSize="24px"
              lineHeight="38px"
              letterSpacing="0.5px"
              key={`${item.title}_${item.endpoint}`}
              href={item.endpoint}
            >
              {item.title}
            </LinkPrimary>
          ))}
      </NavList>
    </MainNavStyled>
  );
}

type PropsBottomMenu = {
  menuItemCities: any;
  menuItemTypeProperty: any;
};

// const listRepeat = ['City', 'Studio', 'Appartments', 'City', 'Studio', 'Appartments'];

export function BottomNav({ menuItemCities, menuItemTypeProperty }: PropsBottomMenu): JSX.Element {
  return (
    <MainNavStyled bottom>
      <NavListField>Properties in Cyprus</NavListField>
      <NavList>
        {menuItemCities &&
          menuItemCities.map((items: any, index: number) => (
            <NavListItem key={`${items.name}_${index + 1}`}>
              {/* <NavListField>{listRepeat[index]}</NavListField> */}
              <LinkPrimary
                fontFamily="Open Sans"
                fontWeight="normal"
                fontSize="14px"
                lineHeight="19px"
                // href={item.endpoint}
                href="/"
              >
                {items.name}
              </LinkPrimary>
            </NavListItem>
          ))}
      </NavList>
      <NavList>
        {menuItemTypeProperty &&
          menuItemTypeProperty.map((items: any, index: number) => (
            <NavListItem key={`${items.name}_${index + 1}`}>
              <LinkPrimary
                fontFamily="Open Sans"
                fontWeight="normal"
                fontSize="14px"
                lineHeight="19px"
                href="/"
              >
                {items.name}
              </LinkPrimary>
            </NavListItem>
          ))}
      </NavList>
    </MainNavStyled>
  );
}
type PropsMainNav = {
  mainNavList: any;
};

export function MainNav({ mainNavList }: PropsMainNav): JSX.Element {
  return (
    <MainNavStyled>
      <MainNavHeader>
        {mainNavList &&
          mainNavList.map((item: any, index: number) => (
            <NavListItem key={`${item.title}_${index + 1}`}>
              <LinkPrimary
                fontFamily="Open Sans"
                fontWeight="normal"
                fontSize="14px"
                lineHeight="19px"
                href={item.endpoint}
              >
                {item.title}
              </LinkPrimary>
            </NavListItem>
          ))}
      </MainNavHeader>
    </MainNavStyled>
  );
}
