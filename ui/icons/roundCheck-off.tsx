import React from 'react';
import styled from 'styled-components';

const StyledRoundcheckOffBasic = styled.svg`
  cursor: pointer;
`;

export const RoundcheckOffBasic: React.FC<any> = React.memo(props => (
  <StyledRoundcheckOffBasic
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1" y="1" width="14" height="14" rx="7" stroke="#A1D6E2" strokeWidth="2" />
  </StyledRoundcheckOffBasic>
));
