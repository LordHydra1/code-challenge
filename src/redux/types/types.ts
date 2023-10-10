import { Gender } from "../../util/enum/genrder";
import { IUser } from "../../util/model/IUser";
import { UserTypes } from "../Actiontypes/userTypes";

export interface UsersState {
  pending: boolean;
  users: IUser[];
  error: string | null;
  debounce: boolean;
}

export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}
export interface RemoveOddsPayload {
  users: IUser[];
}

export interface FetchUsersRequestPayload {
  debounce: boolean;
}
export interface FetchUsersRequest {
  type: typeof UserTypes.FETCH_USER_REQUEST;
  payload: FetchUsersRequestPayload;
}

export type FetchUsersSuccess = {
  type: typeof UserTypes.FETCH_USER_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export interface RemoveOdds {
  type: typeof UserTypes.REMOVE_ODDS;
  payload: RemoveOddsPayload;
}


export type FetchUsersFailure = {
  type: typeof UserTypes.FETCH_USER_FAILURE;
  payload: FetchUsersFailurePayload;
};

export type UsersActions =
  | RemoveOdds
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;
