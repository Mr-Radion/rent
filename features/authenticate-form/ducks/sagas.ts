// import { delay } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  // UserActionsType,
} from './contracts';
import { UserActionsType } from './contracts/actionTypes';
import { LoadingStatus } from '../../common/store/types';
import { setUserData, setUserLoadingStatus, setVerify } from './actions';
import { AuthApi } from '../api';

export function* fetchVerifyRequest({ payload }: any) {
  // console.log(payload);
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.verify, payload);
    console.log(data);
    yield put(setVerify(data.msg));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
  // console.log(payload);
  const token = 'wdDAWdF*$Hfi94f';
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.signIn, payload);
    console.log(data, data.token);
    yield token && call(AuthApi.logIn, token);
    // yield data.token && call(AuthApi.logIn, data.token);
    // const expirationDate = new Date(new (Date as any).getTime() + data.expiresIn * 1000);
    yield put(setUserData(data));
    // yield put(checkAuthTimeout(data.expiresIn));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchUserTokenDataRequest({ payload }: any) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.getMe, payload);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
  console.log(payload);
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(AuthApi.signUp, payload);
    yield data.key && call(AuthApi.logIn, data.key);
    yield put(setUserData(data));
    yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

// token renewal
// export function* checkAuthTimeout(action): Generator<any> {
//   yield delay(action.expirationTime * 1000);
//   yield put(logout());
// }

export function* fetchLogout(): Generator {
  yield call(AuthApi.logOut);
}

export function* watchAuthSaga(): Generator<any> {
  yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
  yield takeLatest(UserActionsType.FETCH_USER_TOKEN_DATA, fetchUserTokenDataRequest);
  yield takeLatest(UserActionsType.SIGN_OUT, fetchLogout);
  yield takeLatest(UserActionsType.FETCH_VERIFY, fetchVerifyRequest);
}
