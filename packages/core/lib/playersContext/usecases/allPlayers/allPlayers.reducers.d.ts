import {
  IGetPlayersAction,
  IGetPlayersActionFailure,
  IGetPlayersActionSuccess,
} from './allPlayers.actions';
export declare const allPlayersReducer: (
  currentState: any,
  action:
    | IGetPlayersAction
    | IGetPlayersActionSuccess
    | IGetPlayersActionFailure,
) => any;
