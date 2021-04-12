import { LoginFormPropsT } from '../components/login-form';
import { RegisterFormPropsT } from '../components/register-form';
import { LoadingStatus } from '../../common/store/types';
import {
  FetchVerifyInterface,
  SetVerifyInterface,
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  FetchUserTokenDataActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStatusActionInterface,
  SignOutActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import { UserDataToken, UserState, UserCodeVerify } from './contracts/state';

// отсюда все данные должны поставлятся в редьюсер внутри саги:
// data: null / при удачной рег { "key": "e76ecb26-7513-495f-b574-ca0a19475fae" } неудачной { msg: 'Invalid Parameters' } /
// data: при удачной авторизации User / неудачной причина 1. не зарегистрирован { "msg": "User does not exist" } 2. неправильный код { "msg": "Invalid code" }
// code: null / при удачной отправке смс на телефон { "msg": true } / неудачной { msg: 'Invalid Parameters' }

export const fetchSignOut = (): SignOutActionInterface => ({
  type: UserActionsType.SIGN_OUT,
});

export const fetchVerify = (payload: any): FetchVerifyInterface => ({
  type: UserActionsType.FETCH_VERIFY,
  payload,
});

export const setVerify = (payload: UserCodeVerify): SetVerifyInterface => ({
  type: UserActionsType.SET_VERIFY,
  payload,
});

export const fetchSignIn = (payload: LoginFormPropsT): FetchSignInActionInterface => ({
  type: UserActionsType.FETCH_SIGN_IN,
  payload,
});

export const fetchUserTokenData = (payload: UserDataToken): FetchUserTokenDataActionInterface => ({
  type: UserActionsType.FETCH_USER_TOKEN_DATA,
  payload,
});

export const fetchSignUp = (payload: RegisterFormPropsT): FetchSignUpActionInterface => ({
  type: UserActionsType.FETCH_SIGN_UP,
  payload,
});

export const setUserLoadingStatus = (
  payload: LoadingStatus,
): SetUserLoadingStatusActionInterface => ({
  type: UserActionsType.SET_LOADING_STATE,
  payload,
});

// supplies the requested data to the reducer
export const setUserData = (payload: UserState['userData']): SetUserDataActionInterface => ({
  type: UserActionsType.SET_USER_DATA,
  payload,
});

export type UserActions =
  | SetUserLoadingStatusActionInterface
  | SetUserDataActionInterface
  | SetVerifyInterface
  | FetchUserTokenDataActionInterface
  | FetchVerifyInterface
  | SignOutActionInterface;
