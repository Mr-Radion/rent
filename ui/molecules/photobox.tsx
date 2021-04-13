import styled, { css, StyledComponent } from 'styled-components';

type PhotoProps = {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  marginRight?: string;
  fontSize?: string;
  backgroundColor?: string;
  margin?: string;
};

const PhotoBoxStyled: StyledComponent<any, any> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({
    width,
    height,
    color,
    background,
    marginRight,
    fontSize,
    backgroundColor,
    margin,
  }: PhotoProps) => css`
    font-size: ${fontSize};
    width: ${width};
    height: ${height};
    color: ${color};
    background: ${background};
    background-color: ${backgroundColor};
    margin-right: ${marginRight};
    margin: ${margin};
    img {
      position: absolute;
      min-width: 100%;
      max-width: 100%;
      min-height: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  `}
`;

export const PhotoBox = ({ src, className, alt, height, width, backgroundColor, margin }: any) => (
  <PhotoBoxStyled height={height} backgroundColor={backgroundColor} width={width} margin={margin}>
    <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />;
  </PhotoBoxStyled>
);