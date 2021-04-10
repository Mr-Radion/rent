import React from 'react';
import styled from 'styled-components';

const StyledcheckOffBasic = styled.svg`
  cursor: pointer;
`;
export const CheckOffBasic: React.FC<any> = React.memo(props => (
  <StyledcheckOffBasic
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1" y="1" width="14" height="14" rx="3" stroke="#BCBABE" strokeWidth="2" />
  </StyledcheckOffBasic>
));
