'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const root_reducers_1 = require('core/src/configuration/root.reducers');
const players_fixtures_1 = require('core/src/common/fixtures/playersContext/players.fixtures');
const allPlayers_selector_1 = require('./allPlayers.selector');
describe('selectAllPlayers', () => {
  let state;
  beforeEach(() => {
    state = root_reducers_1.rootReducer(undefined, { type: 'INIT' });
  });
  it('should return all players in the state', () => {
    // Given
    state.players.allPlayers = {
      list: [players_fixtures_1.nadal, players_fixtures_1.zidane],
      isLoading: false,
      error: null,
    };
    // When
    const result = allPlayers_selector_1.selectAllPlayers(state);
    // Expect
    expect(result).toEqual([
      players_fixtures_1.nadal,
      players_fixtures_1.zidane,
    ]);
  });
  it('should return empty array when there are no players', () => {
    // Given
    state.players.allPlayers = {
      list: [],
      isLoading: false,
      error: null,
    };
    // When
    const result = allPlayers_selector_1.selectAllPlayers(state);
    // Expect
    expect(result).toEqual([]);
  });
});
