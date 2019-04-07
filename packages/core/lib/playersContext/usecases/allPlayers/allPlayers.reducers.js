'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const allPlayers_actions_1 = require('./allPlayers.actions');
const defaultState = {
  list: [],
  isLoading: false,
  error: null,
};
exports.allPlayersReducer = (currentState = defaultState, action) => {
  switch (action.type) {
    case allPlayers_actions_1.EPlayersActionType.GET_SUCCESS:
      return {
        list: currentState.list.concat(action.payload.list),
        isLoading: false,
        error: null,
      };
    case allPlayers_actions_1.EPlayersActionType.GET:
      return { ...currentState, isLoading: true };
    case allPlayers_actions_1.EPlayersActionType.GET_FAILURE:
      return { ...currentState, error: action.payload.message };
  }
  return currentState;
};
