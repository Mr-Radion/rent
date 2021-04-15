import { ReactNode } from 'react';
import styled, { css, StyledComponent } from 'styled-components';

// type CenterContentProps = {
//   marginTop?: string;
// };
// import styled from 'styled-components';

// Центр будет отличаться учесть это добавив пропсы и оставив общие стили
export const CenterContent: StyledComponent<any, any> = styled.main`
  display: flex;
  justify-content: 'center';
  flex-grow: 1;
  // overflow-y: auto;
  flex-direction: column;
  width: 100%;
  color: var(--canvas-text);
  // grid-area: main;
  ${({ align, background, marginTop }: any) => css`
    display: flex;
    justify-content: 'center';
    align-items: ${align ?? 'center'};
    margin-top: ${marginTop};
    background-color: ${background ?? 'var(--canvas)'};
  `}
`;

type CenterProps = {
  children: ReactNode;
  align?: any;
  background?: any;
  marginTop?: any;
};

export const CenterContentTemplate = ({
  children,
  align,
  background,
  marginTop,
}: CenterProps): JSX.Element => (
  <CenterContent align={align} background={background} marginTop={marginTop}>
    {children}
  </CenterContent>
);
