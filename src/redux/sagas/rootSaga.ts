import { all, fork } from "redux-saga/effects";
import usersSaga from "./userSaga/usersSaga";


export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
