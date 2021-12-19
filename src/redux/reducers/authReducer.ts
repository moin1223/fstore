import { IAuthData } from './../../types';
import { ActionType } from './../actionTypes';
import { AuthAction } from 'redux/actions/authAction';

const authReducer = (
  state: IAuthData | null = null,
  action: AuthAction
): IAuthData | null => {
  switch (action.type) {
    case ActionType.LOGIN: {
      return action.payload;
    }
    case ActionType.LOGOUT:
      return null;
    default:
      return state;
  }
};
export default authReducer;
