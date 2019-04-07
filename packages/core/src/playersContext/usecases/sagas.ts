import { EPlayersActionType } from "./allPlayers/allPlayers.actions";
import { getAllPlayers } from "./allPlayers/allPlayers.sagas";
import { takeEvery } from "redux-saga/effects";

export function* rootPlayers() {
  yield takeEvery(EPlayersActionType.GET, getAllPlayers);
}
