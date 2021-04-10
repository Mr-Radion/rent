import React from 'react';
import styled from 'styled-components';

const StyledcheckOnBasic = styled.svg`
  cursor: pointer;
`;
export const CheckOnBasic: React.FC<any> = React.memo(props => (
  <StyledcheckOnBasic viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="16" height="16" rx="4" fill="#A1D6E2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8778 4.82749C14.0865 5.00834 14.1091 5.32412 13.9282 5.5328L7.42408 13.0376C7.24162 13.2481 6.92228 13.2689 6.71406 13.0838L2.20934 9.07961C2.00295 8.89616 1.98436 8.58012 2.16781 8.37373L2.83218 7.62632C3.01564 7.41993 3.33167 7.40134 3.53806 7.5848L6.52909 10.2435C6.73731 10.4286 7.05665 10.4078 7.23911 10.1972L12.4168 4.22294C12.5977 4.01426 12.9135 3.9917 13.1222 4.17256L13.8778 4.82749Z"
      fill="#00A9B0"
    />
  </StyledcheckOnBasic>
));
