import { PlayersGateway } from 'core/src/playersContext/domain/gateway/PlayersGateway';
import { Player } from 'core/src/playersContext/domain/entities/Player';
export declare class InMemoryPlayersGateway implements PlayersGateway {
  retrieveAll(): Promise<Player[]>;
}
