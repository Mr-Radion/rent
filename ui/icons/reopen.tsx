import styled from 'styled-components';

const StyledReopen = styled.svg`
  cursor: pointer;
`;
export const Reopen: React.FC<any> = props => (
  <StyledReopen
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10H13C15.1217 10 17.1566 10.8429 18.6569 12.3431C20.1571 13.8434 21 15.8783 21 18V20M3 10L9 16M3 10L9 4"
      stroke="#00A9B0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledReopen>
);
