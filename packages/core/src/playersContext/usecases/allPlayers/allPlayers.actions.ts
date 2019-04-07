import { Player } from '@app/core/src/playersContext/domain/entities/Player';

export enum EPlayersActionType {
  GET = 'PLAYERS_GET',
  GET_SUCCESS = 'PLAYERS_GET_SUCCESS',
  GET_FAILURE = 'PLAYERS_GET_FAILURE',
}

export interface IPlayersAction {
  type: EPlayersActionType;
}

export interface IGetPlayersAction extends IPlayersAction {
  type: EPlayersActionType.GET;
}

export interface IGetPlayersActionSuccess extends IPlayersAction {
  type: EPlayersActionType.GET_SUCCESS;
  payload: {
    list: Player[];
  };
}

export interface IGetPlayersActionFailure extends IPlayersAction {
  type: EPlayersActionType.GET_FAILURE;
  payload: {
    message: string;
  };
}
