import { Action } from 'redux';
import { FilterPriceState, FilterAreaState } from './state';

export enum FilterActionTypes {
  SET_FILTER_PROPERTY_BY = 'SET_FILTER_PROPERTY_BY',
  SET_FILTER_PRICE_BY = 'SET_FILTER_PRICE_BY',
  SET_FILTER_AREA_BY = 'SET_FILTER_AREA_BY',
  SET_FILTER_BEDROOMS_COUNTER_BY = 'SET_FILTER_BEDROOMS_COUNTER_BY',
  SET_FILTER_BEDROOMS_TYPE_BY = 'SET_FILTER_BEDROOMS_TYPE_BY',
  SET_FILTER_LOCATION_BY = 'SET_FILTER_LOCATION_BY',
}

export interface SetFilterPropertyActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_PROPERTY_BY;
  payload: string[];
}

export interface SetFilterPriceActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_PRICE_BY;
  payload: FilterPriceState;
}

export interface SetFilterAreaActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_AREA_BY;
  payload: FilterAreaState;
}

export interface SetFilterBedroomsCounterActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_BEDROOMS_COUNTER_BY;
  payload: number[];
}

export interface SetFilterBedroomsTypeActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_BEDROOMS_TYPE_BY;
  payload: string[];
}

export interface SetFilterLocationActionInterface extends Action<FilterActionTypes> {
  type: FilterActionTypes.SET_FILTER_LOCATION_BY;
  payload: string[];
}
