import { IAppState } from "core/src/configuration/app.state";
import { Player } from "core/src/playersContext/domain/entities/Player";

export const selectAllPlayers = (state: IAppState): Player[] => {
  return state.players.allPlayers.list;
};
