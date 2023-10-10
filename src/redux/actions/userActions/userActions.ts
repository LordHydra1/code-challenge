import { Gender } from "../../../util/enum/genrder";
import { UserTypes } from "../../Actiontypes/userTypes";
import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersRequestPayload,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  RemoveOdds,
  RemoveOddsPayload,
} from "../../types/types";

export const fetchusersRequest = (
  payload: FetchUsersRequestPayload
): FetchUsersRequest => ({
  type: UserTypes.FETCH_USER_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: UserTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: UserTypes.FETCH_USER_FAILURE,
  payload,
});

export const removeOdds = (payload: RemoveOddsPayload): RemoveOdds => ({
  type: UserTypes.REMOVE_ODDS,
  payload,
});
