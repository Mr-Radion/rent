import styled, { css, StyledComponent } from 'styled-components';

export const LiName: StyledComponent<any, any> = styled.h1`
  border-color: #7a7a7a;
  outline: none;
  &::placeholder {
    color: #bcbabe;
  }
  ${({ light, lineHeight, color }: any) =>
    light
      ? css`
          font-family: Lato;
          font-weight: normal;
          color: ${color ?? '#4b4b4b'};
          font-size: 18px;
          margin: 0;
          min-width: 210px;
          line-height: ${lineHeight ?? '55px'};
        `
      : css`
          font-family: Lato;
          font-weight: bold;
          font-size: 18px;
          line-height: 55px;
          margin: 0;
          min-width: 210px;
        `}
`;
