import axios from "axios";
import { all, call, debounce, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../../../util/model/IUser";
import { UserTypes } from "../../Actiontypes/userTypes";
import {
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../../actions/userActions/userActions";
import { mockUsers } from "../../../util/mock/mockUsers";

const apiUrl = "http://localhost:1337/api/user-alls/";

const getUsers = () => axios.get<IUser[]>(apiUrl);

function* fetchDataWorker(action: any): any {
  const { debounce: shouldDebounce } = action.payload; // Estrai il parametro 'debounce' dall'azione
  if (shouldDebounce) {
    // Utilizziamo il 'debounce' per gestire il debounce solo quando 'shouldDebounce' è true
    let ms = 300
    yield debounce(300, "FETCH_USER_REQUEST", fetchDataWorker);
    console.log("debounced by: ", ms, "ms");
  }

  try {
    const response = yield call(getUsers);
    yield put(
      fetchUsersSuccess({
        users: response.data.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      })
    );
    yield put(fetchUsersSuccess({users: mockUsers}))
  }
}

function* usersSaga() {
  yield all([takeLatest(UserTypes.FETCH_USER_REQUEST, fetchDataWorker)]);
}

export default usersSaga;
