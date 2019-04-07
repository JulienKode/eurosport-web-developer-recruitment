import { combineReducers } from "redux";
import { allPlayersReducer } from "core/src/playersContext/usecases/allPlayers/allPlayers.reducers";

export const rootPlayersReducer = combineReducers({
  allPlayers: allPlayersReducer
});
