import styled, { css, StyledComponent } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  appearance: none;
  border-radius: 4px;
  font-style: normal;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.5px;
  // font-size: 1.6rem;
  outline: none;
  background-color: var(--canvas);
  border: 1px;
  // &:focus {
  //   box-shadow: 0 0 0 3px var(--primary);
  // }
`;

type PrimaryProps = {
  width: string;
  height: string;
  color: string;
  background: string;
  marginRight: string;
  fontSize: string;
  backdropFilter: string;
  lineHeight: string;
  fontWeight: string;
  focus: number | undefined;
  minWidth: string;
  float: string;
  padding: string;
  radius: string;
  marginTop: string;
  marginLeft: string;
};

export const ButtonPrimary: StyledComponent<any, any> = styled(Button)`
  &:focus {
    outline: none;
  }
  ${({
    width,
    height,
    color,
    background,
    marginRight,
    fontSize,
    backdropFilter,
    lineHeight,
    fontWeight,
    focus,
    minWidth,
    float,
    padding,
    radius,
    marginTop,
    marginLeft,
  }: PrimaryProps) => css`
    min-width: ${minWidth};
    width: ${width};
    font-size: ${fontSize};
    height: ${height};
    color: ${color};
    background: ${background};
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    backdrop-filter: ${backdropFilter};
    line-height: ${lineHeight ?? '26px'};
    font-weight: ${fontWeight ?? '900'};
    float: ${float ?? 'none'};
    padding: ${padding ?? '0'};
    border-radius: ${radius ?? '4px'};
    margin-top: ${marginTop};
    ${
      focus === 1 &&
      css`
      &:nth-child(1) {
      background: #fafafa!important;
      backdrop-filter: blur(4px);
    `
    }}
    ${
      focus === 2 &&
      css`&:nth-child(2) {
      background: #fafafa!important;
      backdrop-filter: blur(4px);
    `
    }}
  `}
`;

export const ButtonBedrooms: StyledComponent<any, any> = styled(Button)`
  &:focus {
    outline: none;
  }
  ${({ width, height, color, background, marginRight, fontSize }: PrimaryProps) => css`
    font-size: ${fontSize};
    width: ${width};
    height: ${height};
    color: ${color};
    background: ${background};
    margin-right: ${marginRight};
  `}
`;
