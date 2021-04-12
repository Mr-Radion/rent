import { UserActions } from './actions';
import { UserActionsType } from './contracts/actionTypes';
import { UserState } from './contracts/state';
import { LoadingStatus } from '../../common/store/types';

const initialUserState: UserState = {
  userData: null,
  status: LoadingStatus.NEVER,
  code: null,
};

export const userReducer = (state = initialUserState, action: UserActions): any => {
  switch (action.type) {
    case UserActionsType.SET_LOADING_STATE:
      return {
        ...state,
        userData: null,
        status: action.payload,
        code: null,
      };
    case UserActionsType.SET_VERIFY:
      return {
        ...state,
        userData: null,
        status: LoadingStatus.LOADING,
        code: action.payload,
      };
    case UserActionsType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        status: LoadingStatus.SUCCESS,
      };
    case UserActionsType.SIGN_OUT:
      return {
        ...state,
        userData: null,
        status: LoadingStatus.LOADED,
      };
    default:
      return state;
  }
};
