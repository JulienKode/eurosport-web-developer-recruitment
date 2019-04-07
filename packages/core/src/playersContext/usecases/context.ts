import { PlayersGateway } from '@app/core/src/playersContext/domain/gateway/PlayersGateway';

export const PLAYERS_CONTEXT_KEY = 'playersGateway';

export interface IPlayersContext {
  [PLAYERS_CONTEXT_KEY]: PlayersGateway;
}
