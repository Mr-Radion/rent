import React from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import { sortedAlphabetically, commasAndSpaces } from '../../../lib/formatted';
import {
  SelectFilterType,
  OptionPrimary,
  CheckboxCustom,
  CheckOnBasic,
  CheckOffBasic,
} from '../../../ui';

type FilterPropertyProps = {
  onClickFilterPropertyType: (type: any) => void;
  activeLabel: any;
  items: any;
};

export const FilterTypeProperty: React.FC<FilterPropertyProps> = React.memo(
  ({ onClickFilterPropertyType, activeLabel, items }) => {
    const filterRef = React.useRef();
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    useOnClickOutside(filterRef, () => setVisiblePopup(false));

    const onSelectItem = (name: string[]) => {
      const newListItem = sortedAlphabetically([...activeLabel, name]);
      const cancelListItem = activeLabel.filter((elem: any) => elem !== name);
      if (activeLabel.includes(name)) {
        onClickFilterPropertyType(cancelListItem);
      } else {
        onClickFilterPropertyType(newListItem);
      }
    };

    return (
      <SelectFilterType
        flexBasis="20%"
        tablet="100%"
        ref={filterRef}
        visiblePopup={visiblePopup}
        padding="20px 16px"
        arrowDefault
      >
        <div className="label">
          <button
            onClick={() => setVisiblePopup(!visiblePopup)}
            onKeyDown={() => setVisiblePopup(!visiblePopup)}
            type="submit"
          >
            {activeLabel.length !== 0 ? commasAndSpaces(activeLabel) : 'Type of property'}
          </button>
        </div>
        {visiblePopup && (
          <div className="filterPopup">
            <ul>
              {' '}
              {items &&
                items.map((obj: any, index) => (
                  <OptionPrimary
                    className={classNames({
                      active: activeLabel.includes(obj.name),
                    })}
                    key={`${obj.name}`}
                    borderTop={index % 2 === 0 && index !== 0 && '1px solid #BCBABE'}
                    paddingTop={index % 2 === 0 && index !== 0 && '26px'}
                    // paddingBottom={index % 2 === 0 && index !== 0 && '26px'}
                    marginBottom={index % 2 !== 0 && '26px'}
                    marginTop={index % 2 !== 0 && '16px'}
                  >
                    <CheckboxCustom
                      labelLeft="16px"
                      iconWidth="1em"
                      iconHeight="1em"
                      label={obj.name}
                      name={obj.name}
                      Id={obj.name}
                      onClickItem={() => onSelectItem(obj.name)}
                      defaultCheck={activeLabel.includes(obj.name) && 'checked'}
                      Icon={activeLabel.includes(obj.name) ? CheckOnBasic : CheckOffBasic}
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
