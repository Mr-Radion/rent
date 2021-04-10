import React from 'react';
import styled from 'styled-components';

const StyledHouse = styled.svg`
  cursor: pointer;
`;
export const HouseIcon: React.FC<any> = React.memo(props => (
  <StyledHouse viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1.5 10.5L3.5 8.5M3.5 8.5L10.5 1.5L17.5 8.5M3.5 8.5V18.5C3.5 18.7652 3.60536 19.0196 3.79289 19.2071C3.98043 19.3946 4.23478 19.5 4.5 19.5H7.5M17.5 8.5L19.5 10.5M17.5 8.5V18.5C17.5 18.7652 17.3946 19.0196 17.2071 19.2071C17.0196 19.3946 16.7652 19.5 16.5 19.5H13.5M7.5 19.5C7.76522 19.5 8.01957 19.3946 8.20711 19.2071C8.39464 19.0196 8.5 18.7652 8.5 18.5V14.5C8.5 14.2348 8.60536 13.9804 8.79289 13.7929C8.98043 13.6054 9.23478 13.5 9.5 13.5H11.5C11.7652 13.5 12.0196 13.6054 12.2071 13.7929C12.3946 13.9804 12.5 14.2348 12.5 14.5V18.5C12.5 18.7652 12.6054 19.0196 12.7929 19.2071C12.9804 19.3946 13.2348 19.5 13.5 19.5M7.5 19.5H13.5"
      stroke="#FAFAFA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledHouse>
));
