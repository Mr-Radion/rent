import styled from 'styled-components';

const StyledHeart = styled.svg`
  cursor: pointer;
`;
export const Wifi: React.FC<any> = props => (
  <StyledHeart
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.75918 10.67C7.61872 9.81051 8.78448 9.32765 10 9.32765C11.2156 9.32765 12.3813 9.81051 13.2408 10.67M10 13.6667H10.0083M4.10835 7.77417C7.36168 4.52 12.6383 4.52 15.8925 7.77417M1.16168 4.8275C6.04252 -0.0533307 13.9575 -0.0533307 18.8392 4.8275"
      stroke="#00A9B0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledHeart>
);
