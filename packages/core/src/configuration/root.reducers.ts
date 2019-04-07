import { combineReducers } from "redux";
import { rootPlayersReducer } from "core/src/playersContext/usecases/reducers";

export const rootReducer = combineReducers({
  players: rootPlayersReducer
});
