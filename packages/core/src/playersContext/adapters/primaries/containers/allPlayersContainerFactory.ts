import { Dispatch } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { IAppState } from '../../../../configuration/app.state';
import { selectAllPlayers } from '../../../usecases/allPlayers/allPlayers.selector';
import { createAction } from '../../../../common/utils/redux';
import { EPlayersActionType } from '../../../usecases/allPlayers/allPlayers.actions';

const mapStateToProps = (state: IAppState) => ({
  players: selectAllPlayers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  getAllPlayers: () => dispatch(createAction(EPlayersActionType.GET)),
});

export const allPlayersContainerFactory = connect(
  mapStateToProps,
  mapDispatchToProps,
);
