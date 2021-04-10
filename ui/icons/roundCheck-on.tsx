import React from 'react';
import styled from 'styled-components';

const StyledRoundcheckOnBasic = styled.svg`
  cursor: pointer;
`;

export const RoundcheckOnBasic: React.FC<any> = React.memo(props => (
  <StyledRoundcheckOnBasic
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1" y="1" width="14" height="14" rx="7" stroke="#A1D6E2" strokeWidth="2" />
    <circle cx="8" cy="8" r="4" fill="#00A9B0" />
  </StyledRoundcheckOnBasic>
));
