import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root.reducers";
import { rootSaga } from "./root.sagas";
import { IAppContext } from "./app.context";
import { RESTEurosportPlayersGateway } from "core/src/playersContext/adapters/secondaries/eurosport/RESTEurosportPlayersGateway";

const context: IAppContext = {
  playersGateway: new RESTEurosportPlayersGateway()
};

const sagaMiddleware = createSagaMiddleware({
  context
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
