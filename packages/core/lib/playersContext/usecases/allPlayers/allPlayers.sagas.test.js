'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('core/src/common/utils/redux');
const allPlayers_actions_1 = require('./allPlayers.actions');
const allPlayers_sagas_1 = require('./allPlayers.sagas');
const players_fixtures_1 = require('core/src/common/fixtures/playersContext/players.fixtures');
const redux_saga_test_plan_1 = require('redux-saga-test-plan');
const context_1 = require('core/src/playersContext/usecases/context');
const matchers_1 = require('redux-saga-test-plan/matchers');
describe('Players saga', () => {
  describe('getAllPlayers', () => {
    it('should call EPlayersActionType.GET_SUCCESS with response', () => {
      // Given
      const retrieveAll = () => Promise.resolve([players_fixtures_1.nadal]);
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET,
      );
      // When
      return redux_saga_test_plan_1
        .expectSaga(allPlayers_sagas_1.getAllPlayers, action)
        .provide([
          [
            matchers_1.getContext(context_1.PLAYERS_CONTEXT_KEY),
            { retrieveAll },
          ],
        ])
        .getContext(context_1.PLAYERS_CONTEXT_KEY)
        .call(retrieveAll)
        .put(
          redux_1.createAction(
            allPlayers_actions_1.EPlayersActionType.GET_SUCCESS,
            { list: [players_fixtures_1.nadal] },
          ),
        )
        .run();
    });
    it('should call EPlayersActionType.GET_FAILURE with error message', () => {
      // Given
      const retrieveAll = () =>
        Promise.reject(new Error('Impossible to fetch players'));
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET,
      );
      // When
      return redux_saga_test_plan_1
        .expectSaga(allPlayers_sagas_1.getAllPlayers, action)
        .provide([
          [
            matchers_1.getContext(context_1.PLAYERS_CONTEXT_KEY),
            { retrieveAll },
          ],
        ])
        .getContext(context_1.PLAYERS_CONTEXT_KEY)
        .call(retrieveAll)
        .put(
          redux_1.createAction(
            allPlayers_actions_1.EPlayersActionType.GET_FAILURE,
            {
              message: 'Impossible to fetch players',
            },
          ),
        )
        .run();
    });
  });
});
