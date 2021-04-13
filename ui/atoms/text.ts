import styled, { css, StyledComponent } from 'styled-components';

export const Text: StyledComponent<any, any> = styled.p`
  ${({
    width,
    height,
    padding,
    margin,
    size,
    color,
    letterSpacing,
    fontWeight,
    lineHeight,
  }: any) => css`
    letter-spacing: ${letterSpacing ?? '0.5px'};
    color: ${color ?? '#1f1f1f'};
    font-weight: ${fontWeight || 'normal'};
    line-height: ${lineHeight || '100%'};
    font-size: ${size ?? '18px'};
    width: ${width};
    height: ${height};
    padding: ${padding};
    margin: ${margin ?? '0'};
  `}
`;

export const TextSpan: StyledComponent<any, any> = styled.span`
  ${({
    width,
    height,
    padding,
    margin,
    size,
    color,
    letterSpacing,
    fontWeight,
    lineHeight,
  }: any) => css`
    letter-spacing: ${letterSpacing ?? '0.5px'};
    color: ${color ?? '#1f1f1f'};
    font-weight: ${fontWeight || 'normal'};
    line-height: ${lineHeight || '100%'};
    font-size: ${size ?? '18px'};
    width: ${width};
    height: ${height};
    padding: ${padding};
    margin: ${margin ?? '0'};
  `}
`;
