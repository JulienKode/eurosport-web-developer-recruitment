import { Player } from '@app/core/src/playersContext/domain/entities/Player';
import { PlayerPresented } from './Player.presented';

export class PlayerPresenter {
  static present(player: Player): PlayerPresented {
    return {
      firstName: player.firstName,
      lastName: player.lastName,
      shortName: player.shortName,
      sex: player.sex.toString(),
      country: player.country,
      picture: player.picture,
      data: player.data,
    };
  }
}
