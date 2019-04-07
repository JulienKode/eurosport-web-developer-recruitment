'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const players_fixtures_1 = require('core/src/common/fixtures/playersContext/players.fixtures');
class InMemoryPlayersGateway {
  retrieveAll() {
    return Promise.resolve([
      players_fixtures_1.nadal,
      players_fixtures_1.zidane,
    ]);
  }
}
exports.InMemoryPlayersGateway = InMemoryPlayersGateway;
