import { call, all } from "@redux-saga/core/effects";
import userSagas from "./User/userSagas";
export default function* rootSaga() {
    yield all([call(userSagas)]);
}

