import styled from 'styled-components';

const StyledBluеbell = styled.svg`
  cursor: pointer;
`;

export const Bluеbell: React.FC<any> = props => (
  <StyledBluеbell viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.99997 3C6.99997 2.46957 7.21069 1.96086 7.58576 1.58579C7.96083 1.21071 8.46954 1 8.99997 1C9.5304 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.832 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0752 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.455 14.6914 17 15H0.999969C1.54491 14.6914 2.00978 14.2592 2.35716 13.7381C2.70454 13.2171 2.92471 12.6217 2.99997 12V9C3.05953 7.73107 3.46327 6.50227 4.16792 5.4453C4.87257 4.38833 5.85156 3.54303 6.99997 3"
      stroke="#A1D6E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15V16C6 16.7957 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7957 12 16V15"
      stroke="#A1D6E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledBluеbell>
);
