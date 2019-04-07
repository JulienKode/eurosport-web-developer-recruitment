import { createAction } from "core/src/common/utils/redux";
import { EPlayersActionType } from "core/src/playersContext/usecases/allPlayers/allPlayers.actions";
import { selectAllPlayers } from "core/src/playersContext/usecases/allPlayers/allPlayers.selector";
import { Dispatch } from "react";
import { IAppState } from "core/src/configuration/app.state";
import { Action } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: IAppState) => ({
  players: selectAllPlayers(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getAllPlayers: () => dispatch(createAction(EPlayersActionType.GET))
});

export const allPlayersContainerFactory = connect(
  mapStateToProps,
  mapDispatchToProps
);
