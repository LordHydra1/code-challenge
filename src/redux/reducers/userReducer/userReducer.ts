import { IUser } from "../../../util/model/IUser";
import { UserTypes } from "../../Actiontypes/userTypes";
import { UsersActions, UsersState } from "../../types/types";

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
  debounce: false,
};

export const userReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case UserTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
        debounce: action.payload.debounce,
      };
    case UserTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case UserTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };
    case UserTypes.REMOVE_ODDS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
