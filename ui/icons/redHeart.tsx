import styled from 'styled-components';

const StyledHeart = styled.svg`
  cursor: pointer;
`;
export const RedHeart: React.FC<any> = props => (
  <StyledHeart
    width="17"
    height="15"
    viewBox="0 0 17 15"
    fill="#EB5757"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.172 2.17196C1.92211 1.42207 2.93934 1.00081 4 1.00081C5.06066 1.00081 6.07789 1.42207 6.828 2.17196L8 3.34296L9.172 2.17196C9.54099 1.78992 9.98237 1.48519 10.4704 1.27555C10.9584 1.06592 11.4833 0.955572 12.0144 0.950957C12.5455 0.946341 13.0722 1.04755 13.5638 1.24867C14.0554 1.4498 14.502 1.74681 14.8776 2.12238C15.2532 2.49795 15.5502 2.94456 15.7513 3.43614C15.9524 3.92773 16.0536 4.45445 16.049 4.98556C16.0444 5.51668 15.934 6.04156 15.7244 6.52958C15.5148 7.01759 15.21 7.45897 14.828 7.82796L8 14.657L1.172 7.82796C0.422116 7.07785 0.000854492 6.06062 0.000854492 4.99996C0.000854492 3.9393 0.422116 2.92207 1.172 2.17196Z"
    />
  </StyledHeart>
);
