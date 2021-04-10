import styled, { StyledComponent } from 'styled-components';

type PropsHead = {
  lineHeight: string;
  marginTop: string;
  marginBottom: string;
  color: string;
  userSelect: string;
};

export const H1: StyledComponent<any, any> = styled.h1((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '4rem'}`,
  marginTop: `${props.marginTop || '6rem'}`,
  marginBottom: `${props.marginBottom || '2rem'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H2: StyledComponent<any, any> = styled.h2((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '2.50rem'}`,
  marginTop: `${props.marginTop || '0'}`,
  marginBottom: `${props.marginBottom || '0'}`,
  color: `${props.color || '#000'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H3: StyledComponent<any, any> = styled.h3((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '2rem'}`,
  marginTop: `${props.marginTop || '0'}`,
  marginLeft: `${props.marginTop}`,
  marginBottom: `${props.marginBottom || '1rem'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H4: StyledComponent<any, any> = styled.h4((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '2rem'}`,
  marginTop: `${props.marginTop || '3rem'}`,
  marginBottom: `${props.marginBottom || '1rem'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H5: StyledComponent<any, any> = styled.h4((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '2rem'}`,
  marginTop: `${props.marginTop || '5rem'}`,
  marginBottom: `${props.marginBottom || '1rem'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H6: StyledComponent<any, any> = styled.h4((props: PropsHead): any => ({
  lineHeight: `${props.lineHeight || '2rem'}`,
  marginTop: `${props.marginTop || '3rem'}`,
  marginBottom: `${props.marginBottom || '1rem'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));
