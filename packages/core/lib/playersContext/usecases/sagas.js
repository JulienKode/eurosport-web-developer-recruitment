'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const allPlayers_actions_1 = require('./allPlayers/allPlayers.actions');
const allPlayers_sagas_1 = require('./allPlayers/allPlayers.sagas');
const effects_1 = require('redux-saga/effects');
function* rootPlayers() {
  yield effects_1.takeEvery(
    allPlayers_actions_1.EPlayersActionType.GET,
    allPlayers_sagas_1.getAllPlayers,
  );
}
exports.rootPlayers = rootPlayers;
