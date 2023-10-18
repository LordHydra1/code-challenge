import { generalFunctionFilterUsersByGender } from "../../../util/functions/general/filteringFunctions";
import { IUser } from "../../../util/models/IUser";
import { UserTypes } from "../../Actiontypes/userTypes";
import { UsersActions, UsersState } from "../../types/types";

const initialState: UsersState = {
  pending: false,
  users: [] as IUser[],
  error: null,
  debounce: false,
  filteredUsers: [] as IUser[],
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
        filteredUsers: [...action.payload.users],
      };
    case UserTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };
    case UserTypes.REMOVE_USERS_ODDS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
        filteredUsers: action.payload.users,
      };
    case UserTypes.FILTER_USERS_BY_GENDER:
      const filteredUsers = generalFunctionFilterUsersByGender(
        state.users,
        action.payload.gender
      );
      return {
        ...state,
        pending: false,
        error: null,
        filteredUsers:
          action.payload.gender.length > 0 ? filteredUsers : [...state.users],
      };
    default:
      return {
        ...state,
      };
  }
};
