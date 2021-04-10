import { ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  min-height: 100vh;
  max-height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    '.'
    'footer';
  flex-grow: 1;
`;

const Header = styled.header`
  grid-area: header;
  z-index: 1;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export type MainTemplateProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export const MainTemplate = ({ header, footer, children }: MainTemplateProps): JSX.Element => (
  <MainContainer>
    {header && <Header>{header}</Header>}
    {children}
    {footer && <Footer>{footer}</Footer>}
  </MainContainer>
);
