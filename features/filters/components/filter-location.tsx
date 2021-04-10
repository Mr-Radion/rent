import React from 'react';
import styled, { StyledComponent } from 'styled-components';
// import classNames from 'classnames';
import { sortedAscending, commasAndSpaces } from '../../../lib/formatted';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import {
  SelectFilterType,
  OptionPrimary,
  CheckboxCustom,
  CheckOnBasic,
  CheckOffBasic,
} from '../../../ui';

const CounterList: StyledComponent<any, any> = styled.ul`
  // display: flex;
  // justify-content: space-between;
`;

type FilterLocationProps = {
  onClickFilterLocation: (adress: any) => void;
  items: any;
  activeAddress: string[];
};

export const FilterLocation: React.FC<FilterLocationProps> = React.memo(
  ({ onClickFilterLocation, items, activeAddress }) => {
    const filterRef = React.useRef();
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    useOnClickOutside(filterRef, () => setVisiblePopup(false));

    const onSelectItemLocation = (address: any) => {
      const newListItem = sortedAscending([...activeAddress, address]);
      const cancelListItem = activeAddress.filter((elem: any) => elem !== address);
      const addAllCities = sortedAscending([
        ...activeAddress.filter((elem: any) => elem === 'All cities'),
        address,
      ]);
      const removeAllCities = sortedAscending([
        ...activeAddress.filter((elem: any) => elem !== 'All cities'),
        address,
      ]);
      if (activeAddress.includes(address)) {
        onClickFilterLocation(cancelListItem);
      } else if (address === 'All cities') {
        onClickFilterLocation(addAllCities);
      } else if (activeAddress.includes('All cities')) {
        onClickFilterLocation(removeAllCities);
      } else {
        onClickFilterLocation(newListItem);
      }
    };

    return (
      <SelectFilterType
        ref={filterRef}
        visiblePopup={visiblePopup}
        // display="flex"
        // width="calc(100% - 1000px)"
        // width="40%"
        flexBasis="40%"
        tablet="100%"
        minWidth="250px"
        arrowDefault
      >
        <div className="label label__location">
          <button
            onClick={() => setVisiblePopup(!visiblePopup)}
            onKeyDown={() => setVisiblePopup(!visiblePopup)}
            type="submit"
          >
            {activeAddress.length !== 0 ? commasAndSpaces(activeAddress) : <span>City</span>}
          </button>
        </div>
        {visiblePopup && (
          <div className="filterPopup">
            <CounterList>
              {' '}
              {items &&
                items.map((obj: any, index) => (
                  <OptionPrimary key={`${obj.id}`} marginTop={index !== 0 && '16px'}>
                    <CheckboxCustom
                      iconWidth="1em"
                      iconHeight="1em"
                      label={obj.name}
                      Id={obj.id}
                      name={obj.name}
                      onClickItem={() => onSelectItemLocation(obj.name)}
                      Icon={activeAddress.includes(obj.name) ? CheckOnBasic : CheckOffBasic}
                      defaultCheck={!!activeAddress.includes(obj.name) && 'checked'}
                    />
                  </OptionPrimary>
                ))}
            </CounterList>
          </div>
        )}
      </SelectFilterType>
    );
  },
);

// сделать минимальное кол-во вводимых значений от 3, после чего только выполнять запрос при необходимости
