import styled, { StyledComponent } from 'styled-components';

type PropsBorder = {
  borderBottom: string;
  margin: string;
};

export const Border: StyledComponent<any, any> = styled.div((props: PropsBorder): any => ({
  borderBottom: `${props.borderBottom || '1px solid #BCBABE'}`,
  margin: `${props.margin || '0'}`,
}));
