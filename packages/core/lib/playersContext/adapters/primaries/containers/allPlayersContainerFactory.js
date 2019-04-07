'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const redux_1 = require('core/src/common/utils/redux');
const allPlayers_actions_1 = require('core/src/playersContext/usecases/allPlayers/allPlayers.actions');
const allPlayers_selector_1 = require('core/src/playersContext/usecases/allPlayers/allPlayers.selector');
const react_redux_1 = require('react-redux');
const mapStateToProps = (state) => ({
  players: allPlayers_selector_1.selectAllPlayers(state),
});
const mapDispatchToProps = (dispatch) => ({
  getAllPlayers: () =>
    dispatch(redux_1.createAction(allPlayers_actions_1.EPlayersActionType.GET)),
});
exports.allPlayersContainerFactory = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps,
);
