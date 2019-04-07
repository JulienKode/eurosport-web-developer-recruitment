import { PlayersGateway } from "core/src/playersContext/domain/gateway/PlayersGateway";
import { Player } from "core/src/playersContext/domain/entities/Player";
import wretch from "wretch";
import { PlayerDTO } from "core/src/playersContext/adapters/secondaries/DTO/PlayersDTO";
import { PlayerBuilder } from "../../../usecases/PlayerBuilder";

export interface AllPlayersResponse {
  players: PlayerDTO[];
}

export class RESTEurosportPlayersGateway implements PlayersGateway {
  retrieveAll(): Promise<Player[]> {
    return wretch(
      "https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json"
    )
      .get()
      .json<AllPlayersResponse>()
      .then(response => response.players.map(this.mapPlayer));
  }

  private mapPlayer = (player: PlayerDTO): Player => {
    return new PlayerBuilder()
      .withFirstName(player.firstname)
      .withLastName(player.lastname)
      .withShortName(player.shortname)
      .withSex(player.sex)
      .withCountry(player.country)
      .withPicture(player.picture)
      .withData(player.data)
      .build();
  };
}
