import { IUser } from "../../util/models/IUser";
import { UserTypes } from "../Actiontypes/userTypes";

export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
  debounce: boolean;
  filteredUsers: IUser[];
}

export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}
export interface RemoveUsersOddsPayload {
  users: IUser[];
}

export interface FetchUsersRequestPayload {
  debounce: boolean;
}
export interface FilterUsersByGenderPayload {
  gender: string;
}
export interface FetchUsersRequest {
  type: typeof UserTypes.FETCH_USER_REQUEST;
  payload: FetchUsersRequestPayload;
}

export type FetchUsersSuccess = {
  type: typeof UserTypes.FETCH_USER_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export interface RemoveUsersOdds {
  type: typeof UserTypes.REMOVE_USERS_ODDS;
  payload: RemoveUsersOddsPayload;
}

export interface FilterUsersByGender {
  type: typeof UserTypes.FILTER_USERS_BY_GENDER;
  payload: FilterUsersByGenderPayload;
}

export type FetchUsersFailure = {
  type: typeof UserTypes.FETCH_USER_FAILURE;
  payload: FetchUsersFailurePayload;
};

export type UsersActions =
  | FilterUsersByGender 
  | RemoveUsersOdds
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;
