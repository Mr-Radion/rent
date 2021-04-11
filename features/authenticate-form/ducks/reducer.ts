import { UserActions } from './actions';
import { UserActionsType } from './contracts/actionTypes';
import { UserState } from './contracts/state';
import { LoadingStatus } from '../../common/store/types';

const initialUserState: UserState = {
  data: null,
  status: LoadingStatus.NEVER,
  code: null,
  // token: null,
};

export const userReducer = (state = initialUserState, action: UserActions): any => {
  switch (action.type) {
    case UserActionsType.SET_LOADING_STATE:
      return {
        ...state,
        data: null,
        status: action.payload,
        code: null,
        // token: null,
      };
    case UserActionsType.SET_VERIFY:
      return {
        ...state,
        data: null,
        status: LoadingStatus.LOADING,
        code: action.payload,
        // token: null,
      };
    case UserActionsType.SET_USER_DATA:
      return {
        ...state,
        data: action.payload,
        status: LoadingStatus.SUCCESS,
        // token: null,
      };
    case UserActionsType.SIGN_OUT:
      return {
        ...state,
        data: null,
        status: LoadingStatus.LOADED,
      };
    default:
      return state;
  }
};
