import { PlayersGateway } from 'core/src/playersContext/domain/gateway/PlayersGateway';
import { Player } from 'core/src/playersContext/domain/entities/Player';
import { PlayerDTO } from 'core/src/playersContext/adapters/secondaries/DTO/PlayersDTO';
export interface AllPlayersResponse {
  players: PlayerDTO[];
}
export declare class RESTEurosportPlayersGateway implements PlayersGateway {
  retrieveAll(): Promise<Player[]>;
  private mapPlayer;
}
