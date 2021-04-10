import styled from 'styled-components';

const StyledSorting = styled.svg`
  cursor: pointer;
`;
export const Sorting: React.FC<any> = props => (
  <StyledSorting
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 17L11 13M5 13V1V13ZM5 1L1 5L5 1ZM5 1L9 5L5 1ZM15 5V17V5ZM15 17L19 13L15 17Z"
      stroke="#00A9B0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSorting>
);
