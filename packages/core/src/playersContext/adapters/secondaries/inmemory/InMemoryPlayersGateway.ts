import { PlayersGateway } from "core/src/playersContext/domain/gateway/PlayersGateway";
import { Player } from "core/src/playersContext/domain/entities/Player";
import {
  nadal,
  zidane
} from "core/src/common/fixtures/playersContext/players.fixtures";

export class InMemoryPlayersGateway implements PlayersGateway {
  retrieveAll(): Promise<Player[]> {
    return Promise.resolve([nadal, zidane]);
  }
}
