import styled, { css, StyledComponent } from 'styled-components';

export const TextField: StyledComponent<any, any> = styled.input`
  border-color: #7a7a7a;
  outline: none;
  &::placeholder {
    color: #bcbabe;
  }
  ${({ width, height, maxWidth, padding, border, borderRadius, margin }: any) => css`
    width: ${width ?? '110px'};
    height: ${height ?? '36px'};
    maxwidth: ${maxWidth};
    padding: ${padding ?? '11px 8px'};
    border: ${border};
    border-radius: ${borderRadius};
    margin: ${margin};
  `}
  &:focus {
    border-color: #7a7a7a;
    outline: none;
  }
`;
