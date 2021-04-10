import styled, { css, StyledComponent } from 'styled-components';

type PropsHead = {
  lineHeight: string;
  margin: string;
  padding: string;
  color: string;
  userSelect: string;
  fontWeight: string;
  fontSize: string;
  textDecorationLine: string;
  borderBottom: string;
  textAlign: string;
};
// export const TextField: StyledComponent<any, any> = styled.input`
//   border-color: #7a7a7a;
//   outline: none;
//   &::placeholder {
//     color: #bcbabe;
//   }
//   ${({ width, height, maxWidth, padding, border, borderRadius, margin }: any) => css`
//     width: ${width ?? '110px'};
//     height: ${height ?? '36px'};
//     maxwidth: ${maxWidth};
//     padding: ${padding ?? '11px 8px'};
//     border: ${border};
//     border-radius: ${borderRadius};
//     margin: ${margin};
//   `}
//   &:focus {
//     border-color: #7a7a7a;
//     outline: none;
//   }
// `;
export const H1: StyledComponent<any, any> = styled.h1(
  (props: PropsHead): any => ({
    fontWeight: `${props.fontWeight || 'bold'}`,
    fontSize: `${props.fontSize || '48px'}`,
    lineHeight: `${props.lineHeight || '100%'}`,
    margin: `${props.margin || '0'}`,
    userSelect: `${props.userSelect || 'none'}`,
    color: `${props.color || '#1f1f1f'}`,
  }),
  css`
    letter-spacing: 1px;
    @media (max-width: 768px) {
      font-size: 28px;
      line-height: 34px;
      margin: 20px 0;
    }
  `,
);

export const H2: StyledComponent<any, any> = styled.h2(
  (props: PropsHead): any => ({
    fontWeight: `${props.fontWeight || 'normal'}`,
    lineHeight: `${props.lineHeight || '100%'}`,
    margin: `${props.margin || '0'}`,
    color: `${props.color || '#1f1f1f'}`,
    fontSize: `${props.fontSize || '24px'}`,
    userSelect: `${props.userSelect || 'none'}`,
  }),
  css`
    letter-spacing: 0.5px;
  `,
);

export const H3: StyledComponent<any, any> = styled.h3(
  (props: PropsHead): any => ({
    fontWeight: `${props.fontWeight || 'normal'}`,
    lineHeight: `${props.lineHeight || '100%'}`,
    margin: `${props.margin || '0'}`,
    color: `${props.color || '#1f1f1f'}`,
    userSelect: `${props.userSelect || 'none'}`,
    textDecorationLine: `${props.textDecorationLine || 'none'}`,
  }),
  css`
    letter-spacing: 0.5px;
    font-size: 18px;
  `,
);

export const H4: StyledComponent<any, any> = styled.h4(
  (props: PropsHead): any => ({
    fontWeight: `${props.fontWeight || 'normal'}`,
    lineHeight: `${props.lineHeight || '100%'}`,
    margin: `${props.margin || '0'}`,
    padding: `${props.padding || '0'}`,
    color: `${props.color || '#1f1f1f'}`,
    userSelect: `${props.userSelect || 'none'}`,
    textDecorationLine: `${props.textDecorationLine || 'none'}`,
    borderBottom: `${props.borderBottom || 'none'}`,
  }),
  css`
    letter-spacing: 0.5px;
    font-size: 16px;
  `,
);

export const H5: StyledComponent<any, any> = styled.h4((props: PropsHead): any => ({
  fontWeight: `${props.fontWeight || 'normal'}`,
  lineHeight: `${props.lineHeight || '100%'}`,
  margin: `${props.margin || '0'}`,
  userSelect: `${props.userSelect || 'none'}`,
}));

export const H6: StyledComponent<any, any> = styled.h4(
  (props: PropsHead): any => ({
    fontWeight: `${props.fontWeight || 'normal'}`,
    lineHeight: `${props.lineHeight || '100%'}`,
    margin: `${props.margin || '0'}`,
    color: `${props.color || '#7E7E7E'}`,
    userSelect: `${props.userSelect || 'none'}`,
    textAlign: `${props.textAlign || 'start'}`,
  }),
  css`
    font-size: 11px;
  `,
);
