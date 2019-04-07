'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('redux');
const reducers_1 = require('core/src/playersContext/usecases/reducers');
exports.rootReducer = redux_1.combineReducers({
  players: reducers_1.rootPlayersReducer,
});
