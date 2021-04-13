import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import shortid from 'shortid';
import { useRouter } from 'next/router';

import {
  setFilterTypePropertyBy,
  setFilterPriceBy,
  setFilterAreaBy,
  setFilterBedroomsCounterBy,
  setFilterBedroomsTypeBy,
  setFilterLocationBy,
} from '../ducks';
import { ButtonPrimary, Input } from '../../../ui';
import {
  filterPropertyItems,
  filterBedroomsItems,
  filterNavItems,
  filterDistrictItems,
} from '../lib';
import { FilterTypeProperty, FilterPrice, FilterBedrooms, FilterArea, FilterLocation } from '..';

const FiltersBox = styled.div`
  .mobileFilter {
    @media (min-width: 769px) {
      display: none;
    }
    > button:nth-child(n + 2):nth-child(-n + 5) {
      margin-right: 1rem;
    }
  }
`;

const FilterNav = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    > button:nth-child(-n + 2) {
      background: #fff;
    }
  }
  @media (max-width: 320px) {
    > button:nth-child(-n + 2) {
      flex-basis: 48%;
    }
  }
`;

const FilterList = styled.div`
  display: flex;
  margin-top: 16px;
  // box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  > div .label button {
    border: 1px solid #bcbabe;
    border-right: none;
    background: #f1f1f2;
    border-top: none;
    border-bottom: none;
  }
  > div:first-child .label button {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 2px solid transparent;
    @media (max-width: 768px) {
      background: #fff;
    }
  }
  > div:nth-child(n+4):nth-child(-n+6) .label button {
    @media (max-width: 768px) {
      display: none;
      }
    }
  }

  > div:last-child .label button {
    border-right: 2px solid #bcbabe;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: 2px solid transparent;
    @media (max-width: 768px) {
      background: #fff;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    > div .label button {
      border: 1px solid transparent;
      border-radius: 4px;
      background: #f1f1f2;
      border-top: none;
      border-bottom: none;
    }
  }
`;

export const Filters = React.memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    filterTypePropertyBy,
    filterBedroomsCounterBy,
    filterBedroomsTypeBy,
    filterLocationBy,
  } = useSelector(({ filters }: any) => filters);
  const [selectedFilterNavigationPoint, setFilterNavigationPoint] = React.useState('Rent');

  const toggleFilterNavigationPoint = React.useCallback(point => {
    setFilterNavigationPoint(point);
  }, []);

  const onSelectFilterPropertyType = React.useCallback(name => {
    dispatch(setFilterTypePropertyBy(name));
  }, []);

  const onSelectFilterPrice = React.useCallback(price => {
    dispatch(setFilterPriceBy(price));
  }, []);

  const onSelectClickFilterArea = React.useCallback(area => {
    dispatch(setFilterAreaBy(area));
  }, []);

  const onSelectFilterBedroomsCounter = React.useCallback(bedrooms => {
    dispatch(setFilterBedroomsCounterBy(bedrooms));
  }, []);

  const onSelectFilterBedroomsType = React.useCallback(bedrooms => {
    dispatch(setFilterBedroomsTypeBy(bedrooms));
  }, []);

  const onSelectFilterLocation = React.useCallback(bedrooms => {
    dispatch(setFilterLocationBy(bedrooms));
  }, []);

  return (
    <FiltersBox>
      {router.pathname === '/' && (
        <FilterNav>
          {filterNavItems &&
            filterNavItems.map((item, index) => (
              <ButtonPrimary
                key={`${item.point}_${index + 1}`}
                fontSize="16px"
                minWidth="120px"
                height="40px"
                color={item.point === selectedFilterNavigationPoint ? '#1995AD' : '#4B4B4B'}
                background="#f1f1f2"
                backdropFilter="blur(8px)"
                // marginRight="32px"
                type="button"
                onClick={() => toggleFilterNavigationPoint(item.point)}
                onKeyUp={() => toggleFilterNavigationPoint(item.point)}
                focus={selectedFilterNavigationPoint === item.point ? index + 1 : undefined}
              >
                {item.point}
              </ButtonPrimary>
            ))}
        </FilterNav>
      )}
      <FilterList>
        {selectedFilterNavigationPoint === 'Buy' && (
          <>
            <FilterTypeProperty
              onClickFilterPropertyType={onSelectFilterPropertyType}
              activeLabel={filterTypePropertyBy}
              items={filterPropertyItems}
            />
            <div className="mobileFilter">
              <p>Rooms</p>
              <>
                {Array.from(['studio', '1', '2', '3', '4'], (type, idx) => (
                  <ButtonPrimary
                    fontSize="16px"
                    minWidth="36px"
                    padding="0 12px"
                    height="36px"
                    background="#fff"
                    color="#1F1F1F"
                    fontWeight="normal"
                    type="button"
                    key={`${shortid.generate() + 1}type${idx}`}
                  >
                    {type}
                  </ButtonPrimary>
                ))}
              </>
            </div>
            <div className="mobileFilter">
              <p>Price</p>
              <Input
                background="#fff"
                placeholder="from"
                width="105px"
                marginRight="1rem"
                border="none"
              />
              <Input
                background="#fff"
                placeholder="to"
                width="105px"
                marginRight="1rem"
                border="none"
              />
            </div>
            {/* <div className="desktopFilter"> */}
            <FilterBedrooms
              onClickFilterBedroomsCounter={onSelectFilterBedroomsCounter}
              onClickFilterBedroomsType={onSelectFilterBedroomsType}
              activeLabelCounter={filterBedroomsCounterBy}
              activeLabelType={filterBedroomsTypeBy}
              items={filterBedroomsItems}
            />
            <FilterPrice onClickFilterPrice={onSelectFilterPrice} />
            <FilterArea onClickFilterArea={onSelectClickFilterArea} />
            {/* </div> */}
            <FilterLocation
              onClickFilterLocation={onSelectFilterLocation}
              activeAddress={filterLocationBy}
              items={filterDistrictItems}
            />
          </>
        )}
        {selectedFilterNavigationPoint === 'Rent' && (
          <>
            <FilterTypeProperty
              onClickFilterPropertyType={onSelectFilterPropertyType}
              activeLabel={filterTypePropertyBy}
              items={filterPropertyItems}
            />
            <FilterBedrooms
              onClickFilterBedroomsCounter={onSelectFilterBedroomsCounter}
              onClickFilterBedroomsType={onSelectFilterBedroomsType}
              activeLabelCounter={filterBedroomsCounterBy}
              activeLabelType={filterBedroomsTypeBy}
              items={filterBedroomsItems}
            />
            <FilterPrice onClickFilterPrice={onSelectFilterPrice} />
            <FilterArea onClickFilterArea={onSelectClickFilterArea} />
            <FilterLocation
              onClickFilterLocation={onSelectFilterLocation}
              activeAddress={filterLocationBy}
              items={filterDistrictItems}
            />
          </>
        )}
      </FilterList>
    </FiltersBox>
  );
});
