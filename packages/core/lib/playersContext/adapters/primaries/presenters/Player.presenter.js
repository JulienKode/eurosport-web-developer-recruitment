'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class PlayerPresenter {
  static present(player) {
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
exports.PlayerPresenter = PlayerPresenter;
