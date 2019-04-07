'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const wretch_1 = __importDefault(require('wretch'));
const PlayerBuilder_1 = require('../../../usecases/PlayerBuilder');
class RESTEurosportPlayersGateway {
  constructor() {
    this.mapPlayer = (player) => {
      return new PlayerBuilder_1.PlayerBuilder()
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
  retrieveAll() {
    return wretch_1
      .default(
        'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json',
      )
      .get()
      .json()
      .then((response) => response.players.map(this.mapPlayer));
  }
}
exports.RESTEurosportPlayersGateway = RESTEurosportPlayersGateway;
