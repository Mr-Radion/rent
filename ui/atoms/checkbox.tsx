import React from 'react';
import styled, { css, StyledComponent } from 'styled-components';
// import { CheckOnBasic, CheckOffBasic } from '../icons';

export const LabelCheckbox: StyledComponent<any, any> = styled.label`
  ${({ height, iconWidth, iconHeight, labelLeft, alignItems }: any) =>
    css`
       {
        display: flex;
        cursor: pointer;
        align-items: ${alignItems ?? 'center'};
        height: ${height ?? ''};
        .check__box {
          // background-image: url(/images/icons/check-off-basic.svg);
          width: ${iconWidth ?? '1em'};
          height: ${iconHeight ?? '1em'};
        }
        > input[type='checkbox'] {
          appearance: none;
          cursor: pointer;
          margin: 0;
        }
        input:checked + .check__box {
          // background-image: url(/images/icons/check-on-basic.svg);
          width: ${iconWidth ?? '1em'};
          height: ${iconHeight ?? '1em'};
        }
        .check__label {
          line-height: 14px;
          font-weight: normal;
          font-size: 18px;
          margin-left: ${labelLeft ?? '16px'};
        }
      }
    `}
`;

export const CheckboxCustom: React.FC<any> = React.memo(
  ({
    label,
    Id,
    name,
    onClickItem,
    onChangeItem,
    defaultCheck,
    check,
    disable,
    height,
    iconWidth,
    iconHeight,
    labelLeft,
    Icon,
  }): JSX.Element => (
    <LabelCheckbox htmlFor={Id} height={height} labelLeft={labelLeft}>
      <input
        onClick={onClickItem}
        onChange={onChangeItem}
        id={Id}
        name={name}
        type="checkbox"
        defaultChecked={defaultCheck}
        checked={check}
        disabled={disable}
      />
      {Icon && <Icon width={iconWidth} height={iconHeight} />}
      <span className="check__label">{label && label}</span>
    </LabelCheckbox>
  ),
);
