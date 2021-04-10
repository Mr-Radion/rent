import styled, { StyledComponent } from 'styled-components';

export const TextSkeleton: StyledComponent<any, any> = styled.div`
  border-radius: 5px;
  margin: 3px;
  // width: ${props => (props as any).width || '120px'};
  height: 15px;

  background: linear-gradient(-45deg, #ccc,lightgrey, grey);
  background-size: 400% 400%;
  -webkit-animation: Gradient 2s ease infinite;
  -moz-animation: Gradient 2s ease infinite;
  animation: Gradient 2s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
      background-position: 0% 50%
  }
  50% {
      background-position: 100% 50%
  }
  100% {
      background-position: 0% 50%
  }
}

@-moz-keyframes Gradient {
  0% {
      background-position: 0% 50%
  }
  50% {
      background-position: 100% 50%
  }
  100% {
      background-position: 0% 50%
  }
}

@keyframes Gradient {
  0% {
      background-position: 0% 50%
  }
  50% {
      background-position: 100% 50%
  }
  100% {
      background-position: 0% 50%
  }
}`;
