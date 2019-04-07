import { Player } from '@app/core/src/playersContext/domain/entities/Player';
import { PlayerBuilder } from '@app/core/src/playersContext/usecases/PlayerBuilder';

const spain = { picture: 'http://url.com/image.png', code: 'ESP' };
const france = { picture: 'http://url.com/image.png', code: 'FRA' };

export const nadalPlayerData = {
  rank: 1,
  points: 1982,
  weight: 85000,
  height: 185,
  age: 33,
  last: [1, 0, 0, 0, 1],
};

export const nadal: Player = new PlayerBuilder()
  .withFirstName('Rafael')
  .withLastName('Nadal')
  .withShortName('R.NAD')
  .withSex('M')
  .withCountry(spain)
  .withData(nadalPlayerData)
  .withPicture('nadal.pic/image.png')
  .build();

export const zidanePlayerData = {
  rank: 1,
  points: 0,
  weight: 80000,
  height: 185,
  age: 46,
  last: [1, 1, 1, 1, 1],
};

export const zidane: Player = new PlayerBuilder()
  .withFirstName('Zinedine')
  .withLastName('Zidane')
  .withShortName('Z.ZID')
  .withSex('M')
  .withCountry(france)
  .withData(zidanePlayerData)
  .withPicture('zidane.pic/image.png')
  .build();
