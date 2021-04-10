import styled, { StyledComponent } from 'styled-components';
import {
  // WithTag,
  mixins,
} from '../../lib/styled-components-layout';

// export const ContainerAdaptive: StyledComponent<any, any> = styled(WithTag)`
export const ContainerAdaptive: StyledComponent<any, any> = styled.div`
  ${mixins}
  width: 100%;
  // display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
`;
