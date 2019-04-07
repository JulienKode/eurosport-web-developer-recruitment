import { Player } from '@app/core/src/playersContext/domain/entities/Player';

export type TAllPlayersPropsContainerProps = {
  getAllPlayers: Function;
  players: Player[];
};
