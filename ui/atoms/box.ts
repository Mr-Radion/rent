import styled, { css, StyledComponent } from 'styled-components';

export const Box: StyledComponent<any, any> = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-flow: column;
  flex-shrink: 0;
  &:hover {
    display: flex;
    flex-flow: column;
    flex-shrink: 0;
  }
  ${({ sticky }: any) =>
    sticky &&
    css`
      position: sticky;
    `}
  ${({ popup }: any) =>
    popup &&
    css`
      width: 450px;
      position: fixed;
      z-index: 9;
    `}
`;
