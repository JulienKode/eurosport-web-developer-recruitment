import { combineReducers } from 'redux';
import { rootPlayersReducer } from '@app/core/src/playersContext/usecases/reducers';

export const rootReducer = combineReducers({
  players: rootPlayersReducer,
});
