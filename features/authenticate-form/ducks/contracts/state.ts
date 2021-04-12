import { LoadingStatus } from '../../../common/store/types';

export interface UserDataToken {
  _id?: string;
  time: string;
  timechange: string;
  status: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  ipreg: string;
  ipauth: string;
}

export interface UserDataCode {
  id: string;
  time: string;
  name: string;
  type: string;
  email: string;
  phone: string;
  token: string;
}

export interface UserDataRegistered {
  key: 'e76ecb26-7513-495f-b574-ca0a19475fae';
}

export interface UserDataFailed {
  msg: 'Invalid Parameters' | 'User does not exist' | 'Invalid code' | 'Invalid token';
}

export interface UserCodeVerify {
  msg: true | 'Invalid Parameters';
}

export interface UserState {
  userData: null | UserDataToken | UserDataCode | UserDataRegistered | UserDataFailed;
  status: LoadingStatus;
  code: null | UserCodeVerify;
}
