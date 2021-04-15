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
  marginLeft?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
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
    marginLeft,
    margin,
    maxWidth,
    maxHeight,
    borderRadius,
  }: PhotoProps) => css`
    overflow-y: hidden;
    cursor: pointer;
    font-size: ${fontSize};
    width: ${width};
    height: ${height};
    color: ${color};
    background: ${background};
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
    margin-right: ${marginRight};
    margin-left: ${marginLeft};
    margin: ${margin};
    max-width: ${maxWidth};
    max-height: ${maxHeight};
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

export const PhotoBox = ({
  src,
  className,
  alt,
  height,
  width,
  backgroundColor,
  margin,
  marginLeft,
  maxWidth,
  maxHeight,
  borderRadius,
}: any) => (
  <PhotoBoxStyled
    height={height}
    backgroundColor={backgroundColor}
    width={width}
    margin={margin}
    marginLeft={marginLeft}
    borderRadius={borderRadius}
    maxWidth={maxWidth}
    maxHeight={maxHeight}
  >
    <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
  </PhotoBoxStyled>
);
