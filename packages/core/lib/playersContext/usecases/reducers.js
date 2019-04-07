'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('redux');
const allPlayers_reducers_1 = require('core/src/playersContext/usecases/allPlayers/allPlayers.reducers');
exports.rootPlayersReducer = redux_1.combineReducers({
  allPlayers: allPlayers_reducers_1.allPlayersReducer,
});
