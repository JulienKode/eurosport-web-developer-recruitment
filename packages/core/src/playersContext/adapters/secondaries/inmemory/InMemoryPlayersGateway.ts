import { PlayersGateway } from '@app/core/src/playersContext/domain/gateway/PlayersGateway';
import { Player } from '@app/core/src/playersContext/domain/entities/Player';
import {
  nadal,
  zidane,
} from '@app/core/src/common/fixtures/playersContext/players.fixtures';

export class InMemoryPlayersGateway implements PlayersGateway {
  retrieveAll = (): Promise<Player[]> => {
    return Promise.resolve([nadal, zidane]);
  };
}
