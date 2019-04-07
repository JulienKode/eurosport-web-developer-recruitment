import { rootPlayers } from '@app/core/src/playersContext/usecases/sagas';
import { all, fork } from 'redux-saga/effects';

export const allCoreSagas = [fork(rootPlayers)];

export function* rootSaga() {
  yield all(allCoreSagas);
}
