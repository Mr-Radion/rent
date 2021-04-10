// import Document from 'next/document';
import styled, { css, StyledComponent } from 'styled-components';

export const SelectFilterType: StyledComponent<any, any> = styled.div`
  ${({
    display,
    width,
    flexBasis,
    height,
    maxWidth,
    minWidth,
    labelColor,
    arrowDefault,
    visiblePopup,
    padding,
    tablet,
  }: any) => css`
    position: relative;
    display: ${display};
    // width: ${width ?? '20%'};
    flex-basis: ${flexBasis ?? '20%'};
    height: ${height ?? 'fit-content'};
    max-width: ${maxWidth};
    min-width: ${minWidth};
    @media screen and (max-width: 768px) {
      flex-basis: ${tablet};
    }
    .filterPopup {
      position: absolute;
      z-index: 10;
      left: 0;
      margin-top: 12px;
      padding: ${padding ?? '16px'};
      min-width: 100%;
      background: #f1f1f2;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
    }
    .label {
      position: relative;
      height: fit-content;
      width: inherit;
    }
    .label__location {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 100%;
    }
    .label > button {
      font-size: 16px;
      text-align: start;
      padding-left: 14px;
      padding-right: 32px;
      width: 100%;
      height: 56px;
      cursor: pointer;
      color: ${labelColor ?? 'initial'};
      border: none;
      &:focus {
        outline: none;
      }
      > span {
        color: #bcbabe;
      }
    }
    ${arrowDefault &&
    css`
      .label > button::after {
        position: absolute;
        top: 50%;
        right: 16px;
        display: block;
        width: 8.16px;
        height: 8.16px;
        content: '';
        border-right: 2px solid #00a9b0;
        border-bottom: 2px solid #00a9b0;
        transition: transform 0.3s;
        transform: translateY(-50%) rotate(45deg);
      }
      ${visiblePopup &&
      css`
        .label > button {
          background: #00a9b0 !important;
          color: #fafafa;
          > span {
            color: #fafafa;
          }
        }
        .label > button::after {
          transform: translateY(-10%) rotate(225deg);
          border-color: #fafafa;
        }
      `}
    `}
  `}
`;

const Option: StyledComponent<any, any> = styled.li`
  list-style-type: none;
`;

export const OptionPrimary: StyledComponent<any, any> = styled(Option)`
  ${({
    width,
    height,
    maxWidth,
    minWidth,
    color,
    borderTop,
    paddingTop,
    paddingBottom,
    marginBottom,
    marginTop,
  }: any) => css`
    width: ${width};
    height: ${height};
    maxwidth: ${maxWidth};
    minwidth: ${minWidth};
    color: ${color};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    margin-bottom: ${marginBottom};
    margin-top: ${marginTop};
    border-top: ${borderTop};
  `}
`;

export const OptionButton: StyledComponent<any, any> = styled(Option)`
  cursor: pointer;
  .active {
    background-color: #a1d6e2 !important;
    color: #00a9b0;
  }
`;
