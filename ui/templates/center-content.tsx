import { ReactNode } from 'react';
import styled, { css, StyledComponent } from 'styled-components';

type CenterContentProps = {
  marginTop?: string;
};

// Центр будет отличаться учесть это добавив пропсы и оставив общие стили
export const CenterContent: StyledComponent<any, any> = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  // overflow-y: auto;
  flex-direction: column;
  width: 100%;
  color: var(--canvas-text);
  background-color: var(--canvas);
  // grid-area: main;
  ${({ marginTop }: CenterContentProps) => css`
    margin-top: ${marginTop};
  `}
`;

type CenterProps = {
  children: ReactNode;
  marginTop?: string;
};

export const CenterContentTemplate = ({ children, marginTop }: CenterProps): JSX.Element => (
  <CenterContent marginTop={marginTop}>{children}</CenterContent>
);
