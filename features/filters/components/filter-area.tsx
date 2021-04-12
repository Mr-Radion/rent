import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { SelectFilterType, NumberField } from '../../../ui';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import { numberIntervalsFormatted } from '../../../lib/formatted';
import { FilterAreaState } from '../ducks';

const AreaWrapper: StyledComponent<any, any> = styled.div`
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

type FilterAreaProps = {
  onClickFilterArea: (obj: any) => void;
};

export const FilterArea: React.FC<FilterAreaProps> = React.memo(({ onClickFilterArea }) => {
  const filterRef = React.useRef();
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<FilterAreaState>({
    from: 0,
    to: 0,
  });
  useOnClickOutside(filterRef, () => setVisiblePopup(false));

  const handleInput = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (value.length !== 6) setForm({ ...form, [e.target.name]: value });
  };

  React.useEffect(() => {
    if (onClickFilterArea && (form.from || form.to)) {
      onClickFilterArea({ from: form.from, to: form.to });
    }
  }, [form.from, form.to]);

  return (
    <SelectFilterType ref={filterRef} visiblePopup={visiblePopup} arrowDefault>
      <div className="label">
        <button
          onClick={() => setVisiblePopup(!visiblePopup)}
          onKeyDown={() => setVisiblePopup(!visiblePopup)}
          type="submit"
        >
          {(form.from && !form.to && `from ${numberIntervalsFormatted(form.from)} м²`) ||
            (!form.from && form.to && `to ${numberIntervalsFormatted(form.to)} м²`) ||
            (form.from &&
              form.to &&
              `${numberIntervalsFormatted(form.from)} - ${numberIntervalsFormatted(
                form.to,
              )} м²`) || <span>Square</span>}
        </button>
      </div>
      {visiblePopup && (
        <div className="filterPopup">
          <AreaWrapper>
            <span>
              <NumberField
                type="number"
                min="0"
                max="99999"
                name="from"
                value={form.from === 0 ? undefined : form.from}
                onChange={handleInput}
                placeholder="From"
                width="110px"
                height="36px"
                border="2px solid #BCBABE"
                borderRadius="4px"
                paddingRight="24px"
              />
              <span>м²</span>
            </span>
            <span>
              <NumberField
                type="number"
                min="0"
                max="99999"
                value={form.to === 0 ? undefined : form.to}
                name="to"
                onChange={handleInput}
                placeholder="To"
                width="110px"
                height="36px"
                border="2px solid #BCBABE"
                borderRadius="4px"
                paddingRight="24px"
              />
              <span>м²</span>
            </span>
          </AreaWrapper>
        </div>
      )}
    </SelectFilterType>
  );
});

// Убрать запятые при вводе в инпут (точки можно оставить)
