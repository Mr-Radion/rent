import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { useOnClickOutside } from '../../../lib/custom-hooks';
import { sortedAscending, numberDivisionFormatted } from '../../../lib/formatted';
import {
  SelectFilterType,
  OptionPrimary,
  OptionButton,
  ButtonBedrooms,
  CheckboxCustom,
  CheckOnBasic,
  CheckOffBasic,
} from '../../../ui';

const CounterList: StyledComponent<any, any> = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

type FilterBedroomsProps = {
  onClickFilterBedroomsCounter: (num: any) => void;
  onClickFilterBedroomsType: (type: any) => void;
  items: any;
  activeLabelCounter: number[];
  activeLabelType: string[];
};

export const FilterBedrooms: React.FC<FilterBedroomsProps> = React.memo(
  ({
    onClickFilterBedroomsCounter,
    onClickFilterBedroomsType,
    items,
    activeLabelCounter,
    activeLabelType,
  }) => {
    const filterRef = React.useRef();
    const router = useRouter();
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    useOnClickOutside(filterRef, () => setVisiblePopup(false));

    const onSelectItemCounter = (bedrooms: any) => {
      const newList = sortedAscending([...activeLabelCounter, bedrooms]);
      const newList2 = activeLabelCounter.filter((elem: any) => elem !== bedrooms);
      if (activeLabelCounter.includes(bedrooms)) {
        onClickFilterBedroomsCounter(newList2);
      } else {
        onClickFilterBedroomsCounter(newList);
      }
    };

    const onSelectItemRoomType = (type: any) => {
      const newList = [...activeLabelType, type];
      const newList2 = activeLabelType.filter((elem: any) => elem !== type);
      if (activeLabelType.includes(type)) {
        onClickFilterBedroomsType(newList2);
      } else {
        onClickFilterBedroomsType(newList);
      }
    };

    return (
      <SelectFilterType
        ref={filterRef}
        visiblePopup={visiblePopup}
        arrowDefault={router.pathname === '/' ? 'arrowDefault' : ''}
      >
        <div className="label">
          <button
            onClick={() => setVisiblePopup(!visiblePopup)}
            onKeyDown={() => setVisiblePopup(!visiblePopup)}
            type="submit"
          >
            {numberDivisionFormatted(activeLabelCounter, activeLabelType) || 'Rooms'}
          </button>
        </div>
        {visiblePopup && (
          <div className="filterPopup">
            <CounterList>
              {' '}
              {items.counter &&
                items.counter.map((num: any, index: number) => (
                  <OptionButton onClick={() => onSelectItemCounter(num)} key={`${num}`}>
                    <ButtonBedrooms
                      fontSize={router.pathname === '/' ? '16px' : ''}
                      type="submit"
                      width={router.pathname === '/' ? '36px' : ''}
                      height={router.pathname === '/' ? '36px' : ''}
                      className={classNames({
                        active: activeLabelCounter.includes(num),
                      })}
                    >
                      {items.counter.length - 1 === index ? `${num}+` : num}
                    </ButtonBedrooms>
                  </OptionButton>
                ))}
            </CounterList>
            <ul>
              {items.types &&
                items.types.map((type: any) => (
                  <OptionPrimary key={type}>
                    <CheckboxCustom
                      iconWidth="1em"
                      iconHeight="1em"
                      label={type}
                      labelLeft="8px"
                      item={type}
                      name={type}
                      type="checkbox"
                      onClickItem={() => onSelectItemRoomType(type)}
                      Icon={activeLabelType.includes(type) ? CheckOnBasic : CheckOffBasic}
                    />
                  </OptionPrimary>
                ))}
            </ul>
          </div>
        )}
      </SelectFilterType>
    );
  },
);
