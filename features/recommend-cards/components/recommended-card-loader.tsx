import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 19.81rem;
  margin-bottom: 20px;
  box-shadow: 0px 2px 8px rgb(119 204 209 / 25%);
  border-radius: 4px;
`;

export const LoadingRecommendedBlock: React.FC<any> = props => (
  <CartWrapper>
    <ContentLoader
      speed={2}
      width={316.95}
      height={297.15}
      viewBox="0 0 316.950 297.150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="192" rx="0" ry="0" width="92" height="36" />
      <rect x="0" y="0" rx="4" ry="4" width="317" height="184" />
      <rect x="10" y="274" rx="0" ry="0" width="97" height="21" />
      <rect x="10" y="229" rx="0" ry="0" width="142" height="37" />
    </ContentLoader>
  </CartWrapper>
);
