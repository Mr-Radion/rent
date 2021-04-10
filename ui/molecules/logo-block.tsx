import React from 'react';
import styled from 'styled-components';
import { LinkPrimary } from '../atoms';

export const LogoBlock = styled.div``;

export const LogoWrapper: React.FC = ({ children }) => (
  <LogoBlock>
    <LinkPrimary href="/">{children}</LinkPrimary>
  </LogoBlock>
);
