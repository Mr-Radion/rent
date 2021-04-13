import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { useRouter } from 'next/router';

import { SelectFilterType, NumberField } from '../../../ui';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import { priceNumberRound } from '../../../lib/formatted';

const PriceWrapper: StyledComponent<any, any> = styled.div`
  display: flex;
  > span {
    position: relative;
  }
  > span:first-child {
    margin-right: 16px;
  }
  > span > span {
    font-family: 'Rubik', sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    position: absolute;
    top: calc(50% - 19px / 2 + 0.5px);
    right: 8px;
    pointer-events: none;
  }
`;

type FilterPriceProps = {
  onClickFilterPrice: (obj: any) => void;
};

export const FilterPrice: React.FC<FilterPriceProps> = React.memo(({ onClickFilterPrice }) => {
  const filterRef = React.useRef();
  const router = useRouter();
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const [getFrom, setFrom] = React.useState<number>();
  const [getTo, setTo] = React.useState<number>();
  const [getFromFormatted, setFromFormatted] = React.useState<string>('');
  const [getToFormatted, setToFormatted] = React.useState<string>('');
  useOnClickOutside(filterRef, () => setVisiblePopup(false));

  const handleInput = (e: any) => {
    const { name, value }: any = e.target;
    switch (name) {
      case 'from':
        switch (true) {
          case value.length !== 13:
            setFrom(value);
            setFromFormatted(priceNumberRound(value));
            break;
          default:
            break;
        }
        break;
      case 'to':
        switch (true) {
          case value.length !== 13:
            setTo(value);
            setToFormatted(priceNumberRound(value));
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (onClickFilterPrice && (getFrom || getTo)) {
      onClickFilterPrice({ from: getFrom, to: getTo });
    }
  }, [getTo, getFrom]);

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
          {(getFromFormatted && !getToFormatted && `from ${getFromFormatted}`) ||
            (!getFromFormatted && getToFormatted && `to ${getToFormatted}`) ||
            (getFromFormatted && getToFormatted && `${getFromFormatted} - ${getToFormatted}`) || (
              <span>Price</span>
            )}
        </button>
      </div>
      {visiblePopup && (
        <div className="filterPopup">
          <PriceWrapper>
            <span>
              <NumberField
                type="number"
                min="0"
                max="999999999999"
                name="from"
                value={getFrom}
                onChange={handleInput}
                placeholder="From"
                width="110px"
                height="36px"
                border="2px solid #BCBABE"
                borderRadius="4px"
                paddingRight="24px"
              />
              <span>€</span>
            </span>
            <span>
              <NumberField
                type="number"
                min="0"
                max="999999999999"
                value={getTo}
                name="to"
                onChange={handleInput}
                placeholder="To"
                width="110px"
                height="36px"
                border="2px solid #BCBABE"
                borderRadius="4px"
                paddingRight="24px"
              />
              <span>€</span>
            </span>
          </PriceWrapper>
        </div>
      )}
    </SelectFilterType>
  );
});

// Убрать запятые при вводе в инпут (точки можно оставить)
