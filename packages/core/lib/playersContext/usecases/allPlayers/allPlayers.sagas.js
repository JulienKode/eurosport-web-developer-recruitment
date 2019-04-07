'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const allPlayers_actions_1 = require('./allPlayers.actions');
const redux_1 = require('core/src/common/utils/redux');
const effects_1 = require('redux-saga/effects');
const context_1 = require('core/src/playersContext/usecases/context');
function* getAllPlayers(action) {
  try {
    const playersGateway = yield effects_1.getContext(
      context_1.PLAYERS_CONTEXT_KEY,
    );
    const list = yield effects_1.call(playersGateway.retrieveAll);
    yield effects_1.put(
      redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET_SUCCESS,
        { list },
      ),
    );
  } catch (error) {
    yield effects_1.put(
      redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET_FAILURE,
        { message: error.message },
      ),
    );
  }
}
exports.getAllPlayers = getAllPlayers;
