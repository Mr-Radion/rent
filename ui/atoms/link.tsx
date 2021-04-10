import React from 'react';
import Link from 'next/link';
import styled, { css, StyledComponent } from 'styled-components';

type LinkProps = {
  href: string;
  target?: string;
  className?: string | undefined;
};

export const LinkCustom: React.FC<LinkProps> = ({ className, href, target, children }) => (
  <Link href={href}>
    <a target={target} className={className}>
      {children}
    </a>
  </Link>
);

type LinkPrimaryProps = {
  fontWeight: string;
  fontSize: string;
  color: string;
  lineHeight: string;
  letterSpacing: string;
  fontFamily: string;
};

export const LinkPrimary: StyledComponent<any, any> = styled(LinkCustom)`
  ${({ fontWeight, fontSize, color, lineHeight, letterSpacing, fontFamily }: LinkPrimaryProps) =>
    css`
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
      color: ${color};
      line-height: ${lineHeight};
      letter-spacing: ${letterSpacing};
    `}
`;

type LinkButtonProps = {
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  marginRight?: string;
  marginTop?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  fontSize?: string;
  lineHeight?: string;
};

// @ts-ignore
export const LinkButton: StyledComponent<any, any, any, never> = styled(LinkCustom)`
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
  ${({
    width,
    height,
    color,
    background,
    marginRight,
    marginTop,
    display,
    justifyContent,
    alignItems,
    padding,
    fontSize,
    lineHeight,
  }: LinkButtonProps) =>
    css`
      display: ${display ?? 'block'};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      width: ${width};
      padding: ${padding ?? '5px'};
      font-size: ${fontSize ?? '16px'};
      height: ${height};
      color: ${color};
      background: ${background};
      margin-right: ${marginRight};
      margin-top: ${marginTop};
      line-height: ${lineHeight ?? '26px'};
    `}
`;
