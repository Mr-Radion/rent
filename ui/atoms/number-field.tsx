import styled, { css, StyledComponent } from 'styled-components';

export const NumberField: StyledComponent<any, any> = styled.input`
  border-color: #7a7a7a;
  outline: none;
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &[type='number']:hover,
  &[type='number']:focus {
    -moz-appearance: number-input;
  }
  &::placeholder {
    color: #bcbabe;
  }
  ${({ width, height, maxWidth, padding, border, borderRadius, margin, paddingRight }: any) => css`
    width: ${width ?? '110px'};
    height: ${height ?? '36px'};
    maxwidth: ${maxWidth};
    padding: ${padding ?? '11px 8px'};
    padding-right: ${paddingRight};
    border: ${border};
    border-radius: ${borderRadius};
    margin: ${margin};
  `}
  &:focus {
    border-color: #7a7a7a;
    outline: none;
  }
`;
