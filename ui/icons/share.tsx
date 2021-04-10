import styled from 'styled-components';

const StyledHeart = styled.svg`
  cursor: pointer;
`;
export const Share: React.FC<any> = props => (
  <StyledHeart
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.0001 6C13.6092 6.00002 14.2039 5.8146 14.7051 5.4684C15.2064 5.1222 15.5903 4.63162 15.8059 4.06191C16.0215 3.49219 16.0586 2.87034 15.9122 2.27904C15.7658 1.68774 15.4429 1.15501 14.9864 0.751702C14.5299 0.348394 13.9614 0.0936156 13.3565 0.0212481C12.7517 -0.0511194 12.1392 0.0623529 11.6004 0.346575C11.0616 0.630798 10.6221 1.0723 10.3404 1.61238C10.0586 2.15245 9.94792 2.7655 10.0231 3.37L5.08305 5.84C4.65928 5.43136 4.12465 5.15642 3.54574 5.04945C2.96684 4.94247 2.36926 5.00819 1.82744 5.2384C1.28561 5.46862 0.823499 5.85317 0.498659 6.34414C0.173819 6.83511 0.000610352 7.4108 0.000610352 7.9995C0.000610352 8.58821 0.173819 9.1639 0.498659 9.65487C0.823499 10.1458 1.28561 10.5304 1.82744 10.7606C2.36926 10.9908 2.96684 11.0565 3.54574 10.9496C4.12465 10.8426 4.65928 10.5676 5.08305 10.159L10.0231 12.629C9.93555 13.3312 10.0991 14.0418 10.4848 14.6351C10.8706 15.2284 11.4536 15.6663 12.1309 15.8713C12.8082 16.0763 13.5362 16.0353 14.1862 15.7555C14.8362 15.4757 15.3664 14.9751 15.683 14.3422C15.9996 13.7093 16.0823 12.9849 15.9165 12.2969C15.7506 11.6089 15.3469 11.0017 14.7767 10.5826C14.2065 10.1635 13.5065 9.95951 12.8004 10.0066C12.0943 10.0537 11.4276 10.3489 10.9181 10.84L5.97805 8.37C6.00832 8.12426 6.00832 7.87574 5.97805 7.63L10.9181 5.16C11.4561 5.68 12.1901 6 13.0001 6Z" />
  </StyledHeart>
);
