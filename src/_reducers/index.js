import {userConstants} from '../_constants';

const user = JSON.parse(localStorage.getItem('user'));
export const initialState = {user};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case userConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
