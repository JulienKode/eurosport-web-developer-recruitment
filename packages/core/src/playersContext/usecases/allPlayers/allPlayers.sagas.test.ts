import { createAction } from '@app/core/src/common/utils/redux';
import { EPlayersActionType } from './allPlayers.actions';
import { getAllPlayers } from './allPlayers.sagas';
import { nadal } from '@app/core/src/common/fixtures/playersContext/players.fixtures';
import { Player } from '@app/core/src/playersContext/domain/entities/Player';
import { expectSaga } from 'redux-saga-test-plan';
import { PLAYERS_CONTEXT_KEY } from '@app/core/src/playersContext/usecases/context';
import { getContext } from 'redux-saga-test-plan/matchers';

describe('Players saga', () => {
  describe('getAllPlayers', () => {
    it('should call EPlayersActionType.GET_SUCCESS with response', () => {
      // Given
      const retrieveAll = (): Promise<Player[]> => Promise.resolve([nadal]);
      const action = createAction(EPlayersActionType.GET);

      // When
      return expectSaga(getAllPlayers, action)
        .provide([[getContext(PLAYERS_CONTEXT_KEY), { retrieveAll }]])
        .getContext(PLAYERS_CONTEXT_KEY)
        .call(retrieveAll)
        .put(createAction(EPlayersActionType.GET_SUCCESS, { list: [nadal] }))
        .run();
    });

    it('should call EPlayersActionType.GET_FAILURE with error message', () => {
      // Given
      const retrieveAll = (): Promise<Player[]> =>
        Promise.reject(new Error('Impossible to fetch players'));
      const action = createAction(EPlayersActionType.GET);

      // When
      return expectSaga(getAllPlayers, action)
        .provide([[getContext(PLAYERS_CONTEXT_KEY), { retrieveAll }]])
        .getContext(PLAYERS_CONTEXT_KEY)
        .call(retrieveAll)
        .put(
          createAction(EPlayersActionType.GET_FAILURE, {
            message: 'Impossible to fetch players',
          }),
        )
        .run();
    });
  });
});
