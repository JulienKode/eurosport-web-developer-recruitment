import { rootPlayers } from "core/src/playersContext/usecases/sagas";
import { all, spawn } from "redux-saga/effects";

export const allCoreSagas = [spawn(rootPlayers)];

export function* rootSaga() {
  yield all(allCoreSagas);
}
