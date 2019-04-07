import { PlayersGateway } from 'core/src/playersContext/domain/gateway/PlayersGateway';
export declare const PLAYERS_CONTEXT_KEY = 'playersGateway';
export interface IPlayersContext {
  [PLAYERS_CONTEXT_KEY]: PlayersGateway;
}
