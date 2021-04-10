import {
  FilterActionTypes,
  SetFilterPropertyActionInterface,
  SetFilterPriceActionInterface,
  SetFilterAreaActionInterface,
  SetFilterBedroomsCounterActionInterface,
  SetFilterBedroomsTypeActionInterface,
  SetFilterLocationActionInterface,
} from './contracts/actionTypes';

import { FilterPriceState, FilterAreaState } from './contracts/state';

export const setFilterTypePropertyBy = (payload: string[]): SetFilterPropertyActionInterface => ({
  type: FilterActionTypes.SET_FILTER_PROPERTY_BY,
  payload,
});

export const setFilterPriceBy = (payload: FilterPriceState): SetFilterPriceActionInterface => ({
  type: FilterActionTypes.SET_FILTER_PRICE_BY,
  payload,
});

export const setFilterAreaBy = (payload: FilterAreaState): SetFilterAreaActionInterface => ({
  type: FilterActionTypes.SET_FILTER_AREA_BY,
  payload,
});

export const setFilterBedroomsCounterBy = (
  payload: number[],
): SetFilterBedroomsCounterActionInterface => ({
  type: FilterActionTypes.SET_FILTER_BEDROOMS_COUNTER_BY,
  payload,
});

export const setFilterBedroomsTypeBy = (
  payload: string[],
): SetFilterBedroomsTypeActionInterface => ({
  type: FilterActionTypes.SET_FILTER_BEDROOMS_TYPE_BY,
  payload,
});

export const setFilterLocationBy = (payload: string[]): SetFilterLocationActionInterface => ({
  type: FilterActionTypes.SET_FILTER_LOCATION_BY,
  payload,
});

export type FiltersActions =
  | SetFilterPropertyActionInterface
  | SetFilterPriceActionInterface
  | SetFilterAreaActionInterface
  | SetFilterBedroomsCounterActionInterface
  | SetFilterBedroomsTypeActionInterface
  | SetFilterLocationActionInterface;
