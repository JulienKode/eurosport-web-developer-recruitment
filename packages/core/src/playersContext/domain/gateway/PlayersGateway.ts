import { Player } from "core/src/playersContext/domain/entities/Player";

export interface PlayersGateway {
  retrieveAll(): Promise<Player[]>;
}
