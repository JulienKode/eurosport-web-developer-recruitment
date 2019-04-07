import { combineReducers } from 'redux';
import { allPlayersReducer } from '@app/core/src/playersContext/usecases/allPlayers/allPlayers.reducers';

export const rootPlayersReducer = combineReducers({
  allPlayers: allPlayersReducer,
});
