import { IAppState } from '@app/core/src/configuration/app.state';
import { Player } from '@app/core/src/playersContext/domain/entities/Player';

export const selectAllPlayers = (state: IAppState): Player[] => {
  return state.players.allPlayers.list;
};
