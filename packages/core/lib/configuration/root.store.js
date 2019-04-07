'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('redux');
const redux_saga_1 = __importDefault(require('redux-saga'));
const root_reducers_1 = require('./root.reducers');
const root_sagas_1 = require('./root.sagas');
const RESTEurosportPlayersGateway_1 = require('core/src/playersContext/adapters/secondaries/eurosport/RESTEurosportPlayersGateway');
const context = {
  playersGateway: new RESTEurosportPlayersGateway_1.RESTEurosportPlayersGateway(),
};
const sagaMiddleware = redux_saga_1.default({
  context,
});
// @ts-ignore
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
exports.store = redux_1.createStore(
  root_reducers_1.rootReducer,
  composeEnhancers(redux_1.applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(root_sagas_1.rootSaga);
