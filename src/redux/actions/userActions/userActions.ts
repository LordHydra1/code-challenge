import { UserTypes } from "../../Actiontypes/userTypes";
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersRequestPayload,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  FilterUsersByGender,
  FilterUsersByGenderPayload,
  RemoveUsersOdds,
  RemoveUsersOddsPayload,
} from "../../types/types";

export const fetchusersRequest = (
  payload: FetchUsersRequestPayload
): FetchUsersRequest => ({
  type: UserTypes.FETCH_USER_REQUEST,
  payload
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: UserTypes.FETCH_USER_SUCCESS,
  payload
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: UserTypes.FETCH_USER_FAILURE,
  payload
});

export const removeUsersOdds = (
  payload: RemoveUsersOddsPayload
): RemoveUsersOdds => ({
  type: UserTypes.REMOVE_USERS_ODDS,
  payload
});

export const filterUsersByGender = (
  payload: FilterUsersByGenderPayload
): FilterUsersByGender => ({
  type: UserTypes.FILTER_USERS_BY_GENDER,
  payload
});
