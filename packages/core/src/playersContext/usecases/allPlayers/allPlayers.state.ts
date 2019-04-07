import { Player } from '@app/core/src/playersContext/domain/entities/Player';

export interface IAllPlayersState {
  list: Player[];
  isLoading: boolean;
  error: string | null;
}
