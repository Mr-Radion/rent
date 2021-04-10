import { css, ThemedStyledProps } from 'styled-components';

// export const WithTag = ({ as: HtmlTagName, children, ...props }: WithTagProps): JSX.Element => (
//   <HtmlTagName {...props}>{children}</HtmlTagName>
// );

// type WithTagProps = {
//   children: any;
//   // eslint-disable-next-line react/require-default-props
//   props?: any;
// };

// export const WithTag = ({ children, ...props }: WithTagProps): JSX.Element => (
//   <div {...props}>{children}</div>
// );

const is = (value: any) => typeof value !== 'undefined';
const prop = (value: any) => (is(value) ? value : 'initial');

type MixinsProps = {
  alignContent?: string;
  align?: string;
  basis?: string;
  grow?: string;
  shrink?: string;
  justify?: string;
  order?: string;
  padding?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  tablet?: string;
  mobile?: string;
  background?: string;
  display?: string;
};

export const mixins: any = (props: MixinsProps): ThemedStyledProps<any, any> => css`
  align-content: ${prop(props.alignContent)};
  align-items: ${prop(props.align)};
  flex-basis: ${prop(props.basis)};
  flex-grow: ${prop(props.grow)};
  flex-shrink: ${prop(props.shrink)};
  justify-content: ${prop(props.justify)};
  order: ${prop(props.order)};
  padding: ${prop(props.padding)};
  width: ${prop(props.width)};
  background: ${props.background ?? '#fff'};
  max-width: ${props.maxWidth ?? '120rem'};
  margin: ${props.margin ?? '0 auto'};
  display: ${props.display ?? 'inherit'};
  @media screen and (max-width: 768px) {
    padding: ${props.tablet ?? props.padding};
  }
  @media screen and (max-width: 320px) {
    padding: ${props.mobile ?? '10px 15px'};
  }
`;

// export const Row = styled(WithTag)`
//   display: flex;
//   flex-direction: row;
//   ${mixins}
//   ${(p: any) =>
//     p.gap &&
//     css`
//       & > :not(:first-child) {
//         margin-left: ${p.gap};
//       }
//     `}
// `;
