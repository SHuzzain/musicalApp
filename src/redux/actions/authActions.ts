import {LOGIN_SUCCESS, LOGOUT} from '../constants/actionTypes';

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LogoutAction;

export interface User {
  id: string;
  name: string;
  email: string;
}

export const loginSuccess = (user: User): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
