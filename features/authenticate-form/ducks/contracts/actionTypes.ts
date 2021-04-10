import { Action } from 'redux';
import { LoadingStatus } from '../../../common/store/types';
import { LoginFormPropsT } from '../../components/login-form';
import { RegisterFormPropsT } from '../../components/register-form';
import {
  UserDataCode,
  UserDataToken,
  UserDataFailed,
  UserDataRegistered,
  UserCodeVerify,
} from './state';

export enum UserActionsType {
  AUTH_TOGGLE = 'user/AUTH_TOGGLE',
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_VERIFY = 'user/FETCH_VERIFY',
  SET_VERIFY = 'user/SET_VERIFY',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  FETCH_USER_TOKEN_DATA = 'user/FETCH_USER_TOKEN_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  SIGN_OUT = 'user/SIGN_OUT',
}

export interface AuthToggleActionInterface extends Action<UserActionsType> {
  type: UserActionsType.AUTH_TOGGLE;
  payload: null | undefined | string;
}

export interface SignOutActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SIGN_OUT;
}

export interface FetchVerifyInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_VERIFY;
  payload: any;
}

export interface SetVerifyInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_VERIFY;
  payload: UserCodeVerify;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_IN;
  payload: LoginFormPropsT;
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGN_UP;
  payload: RegisterFormPropsT;
}

export interface FetchUserTokenDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_TOKEN_DATA;
  payload: UserDataToken;
}

// supplies the requested data to the reducer
export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: UserDataCode | UserDataToken | UserDataRegistered | UserDataFailed;
}

export interface SetUserLoadingStatusActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}
