'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('core/src/common/utils/redux');
const players_fixtures_1 = require('core/src/common/fixtures/playersContext/players.fixtures');
const allPlayers_reducers_1 = require('./allPlayers.reducers');
const allPlayers_actions_1 = require('./allPlayers.actions');
describe('Players reducer', () => {
  const createPlayerState = (list, isLoading, error) => ({
    list,
    isLoading,
    error,
  });
  describe('EPlayersActionType.GET_SUCCESS action', () => {
    it('should return merged state with the players', () => {
      // Given
      const state = createPlayerState([players_fixtures_1.nadal], false, null);
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET_SUCCESS,
        { list: [players_fixtures_1.zidane] },
      );
      // When
      const newState = allPlayers_reducers_1.allPlayersReducer(state, action);
      // Expect
      expect(newState.list).toEqual([
        players_fixtures_1.nadal,
        players_fixtures_1.zidane,
      ]);
    });
    it('should put isLoading to false', () => {
      // Given
      const state = createPlayerState([], true, null);
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET_SUCCESS,
        { list: [] },
      );
      // When
      const newState = allPlayers_reducers_1.allPlayersReducer(state, action);
      // Expect
      expect(newState.isLoading).toEqual(false);
    });
  });
  describe('EPlayersActionType.GET action', () => {
    it('should put the loading state to true', () => {
      // Given
      const state = createPlayerState([players_fixtures_1.nadal], false, null);
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET,
      );
      // When
      const newState = allPlayers_reducers_1.allPlayersReducer(state, action);
      // Expect
      expect(newState).toEqual({
        list: [players_fixtures_1.nadal],
        isLoading: true,
        error: null,
      });
    });
  });
  describe('EPlayersActionType.GET_FAILURE action', () => {
    it('should change the error field in the state', () => {
      // Given
      const state = createPlayerState([players_fixtures_1.nadal], false, null);
      const action = redux_1.createAction(
        allPlayers_actions_1.EPlayersActionType.GET_FAILURE,
        { message: 'Impossible to fetch players data' },
      );
      // When
      const newState = allPlayers_reducers_1.allPlayersReducer(state, action);
      // Expect
      expect(newState.error).toEqual('Impossible to fetch players data');
    });
  });
});
