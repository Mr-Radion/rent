import styled from 'styled-components';

const Styled = styled.svg`
  cursor: pointer;
`;
export const FacebookAuthIcon: React.FC<any> = props => (
  <Styled
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9314 39.9079C32.0709 38.9363 40 30.3941 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.835 7.09898 38.012 16.4524 39.6863V26.1875H12V21.3013H16.4524V17.577C16.4524 13.3406 19.0703 11 23.0754 11C24.9939 11 27 11.3299 27 11.3299V15.4896H24.7891C22.6106 15.4896 21.9314 16.7932 21.9314 18.1297V21.3005H26.7952L26.0171 26.1867L21.9314 26.1875V39.9079Z"
      fill="#415993"
    />
  </Styled>
);
