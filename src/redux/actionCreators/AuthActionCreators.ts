import { AuthAction } from './../actions/authAction';
import { Dispatch } from 'react';
import { ActionType } from 'redux/actionTypes';
import AuthService from 'services/AuthService';

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthAction>) => {
    AuthService.login(payload).then((data) => {
      dispatch({
        type: ActionType.LOGIN,
        payload: data,
      });
    });
  };
  // return ;
};
