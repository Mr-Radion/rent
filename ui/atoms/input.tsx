import React from 'react';
import styled, { css, StyledComponent } from 'styled-components';
// import classNames from 'classnames';

type InputProps = {
  setValue?: any;
  value?: string | number;
  type?: string;
  placeholder?: string | undefined;
  height?: string;
  width?: string;
  border?: string;
  background?: string;
  borderRadius?: string;
  placeholderColor?: string;
  marginRight?: string;
  marginTop?: string;
  ref?: any;
  autoFocus?: any;
  onChange?: any;
  name?: any;
  marginLeft?: string;
  paddingRight?: string;
  margin?: string;
};
export const CustomInput: StyledComponent<any, any> = styled.input`
  ${({
    height,
    border,
    background,
    borderRadius,
    placeholderColor,
    paddingRight,
    width,
    marginRight,
    marginTop,
    marginLeft,
    margin,
  }: any) =>
    css`
       {
        padding-right: ${paddingRight};
        height: ${height ?? '33px'};
        width: ${width ?? '160px'};
        border: ${border ?? '2px solid #A1D6E2'};
        background: ${background ?? '#FFFFFF'};
        border-radius: ${borderRadius ?? '4px'};
        margin-right: ${marginRight ?? '0'};
        margin-left: ${marginLeft};
        margin: ${margin};
        padding: 0 0 0 10px;
        margin-top: ${marginTop};
      }
      &::placeholder {
        color: ${placeholderColor ?? '#BCBABE'};
      }
      &:focus {
        border-color: #00a9b0;
        outline: none;
      }
    `}
`;
const Input: React.FC<InputProps> = ({
  // setValue,
  value,
  type,
  placeholder,
  height,
  border,
  background,
  borderRadius,
  placeholderColor,
  paddingRight,
  width,
  marginRight,
  marginTop,
  ref,
  autoFocus,
  onChange,
  name,
  marginLeft,
  margin,
}) => {
  return (
    <CustomInput
      // className={classNames('input-basic', {})}
      // onChange={event => setValue(event.target.value)}
      value={value}
      type={type}
      margin={margin}
      placeholder={placeholder}
      paddingRight={paddingRight}
      width={width}
      height={height}
      border={border}
      background={background}
      borderRadius={borderRadius}
      placeholderColor={placeholderColor}
      marginRight={marginRight}
      marginTop={marginTop}
      ref={ref}
      autoFocus={autoFocus}
      onChange={onChange}
      name={name}
      marginLeft={marginLeft}
    />
  );
};

export default Input;
