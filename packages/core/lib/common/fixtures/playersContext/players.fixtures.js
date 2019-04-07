'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const PlayerBuilder_1 = require('core/src/playersContext/usecases/PlayerBuilder');
const spain = { picture: 'http://url.com/image.png', code: 'ESP' };
const france = { picture: 'http://url.com/image.png', code: 'FRA' };
exports.nadalPlayerData = {
  rank: 1,
  points: 1982,
  weight: 85000,
  height: 185,
  age: 33,
  last: [1, 0, 0, 0, 1],
};
exports.nadal = new PlayerBuilder_1.PlayerBuilder()
  .withFirstName('Rafael')
  .withLastName('Nadal')
  .withShortName('R.NAD')
  .withSex('M')
  .withCountry(spain)
  .withData(exports.nadalPlayerData)
  .withPicture('nadal.pic/image.png')
  .build();
exports.zidanePlayerData = {
  rank: 1,
  points: 0,
  weight: 80000,
  height: 185,
  age: 46,
  last: [1, 1, 1, 1, 1],
};
exports.zidane = new PlayerBuilder_1.PlayerBuilder()
  .withFirstName('Zinedine')
  .withLastName('Zidane')
  .withShortName('Z.ZID')
  .withSex('M')
  .withCountry(france)
  .withData(exports.zidanePlayerData)
  .withPicture('zidane.pic/image.png')
  .build();
