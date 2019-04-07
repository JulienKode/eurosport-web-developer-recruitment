'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const sagas_1 = require('core/src/playersContext/usecases/sagas');
const effects_1 = require('redux-saga/effects');
exports.allCoreSagas = [effects_1.spawn(sagas_1.rootPlayers)];
function* rootSaga() {
  yield effects_1.all(exports.allCoreSagas);
}
exports.rootSaga = rootSaga;
