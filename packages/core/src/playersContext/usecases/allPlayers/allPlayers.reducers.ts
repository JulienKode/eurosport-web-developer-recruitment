import {
  EPlayersActionType,
  IGetPlayersAction,
  IGetPlayersActionFailure,
  IGetPlayersActionSuccess
} from "./allPlayers.actions";
import { IAllPlayersState } from "core/src/playersContext/usecases/allPlayers/allPlayers.state";

const defaultState: IAllPlayersState = {
  list: [],
  isLoading: false,
  error: null
};

export const allPlayersReducer = (
  currentState: IAllPlayersState = defaultState,
  action:
    | IGetPlayersActionSuccess
    | IGetPlayersAction
    | IGetPlayersActionFailure
): IAllPlayersState => {
  switch (action.type) {
    case EPlayersActionType.GET_SUCCESS:
      return {
        list: currentState.list.concat(action.payload.list),
        isLoading: false,
        error: null
      };
    case EPlayersActionType.GET:
      return { ...currentState, isLoading: true };
    case EPlayersActionType.GET_FAILURE:
      return { ...currentState, error: action.payload.message };
  }
  return currentState;
};
