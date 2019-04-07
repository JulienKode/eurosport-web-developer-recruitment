import { EPlayersActionType } from './allPlayers.actions';
import { createAction } from '@app/core/src/common/utils/redux';
import { call, put, getContext } from 'redux-saga/effects';
import { IGetPlayersAction } from './allPlayers.actions';
import { PLAYERS_CONTEXT_KEY } from '@app/core/src/playersContext/usecases/context';

export function* getAllPlayers(action: IGetPlayersAction) {
  try {
    const playersGateway = yield getContext(PLAYERS_CONTEXT_KEY);
    const list = yield call(playersGateway.retrieveAll);
    yield put(createAction(EPlayersActionType.GET_SUCCESS, { list }));
  } catch (error) {
    yield put(
      createAction(EPlayersActionType.GET_FAILURE, { message: error.message }),
    );
  }
}
