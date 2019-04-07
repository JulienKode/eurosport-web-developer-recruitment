import { PlayerBuilder } from '@app/core/src/playersContext/usecases/PlayerBuilder';
import { PlayerPresenter } from './Player.presenter';
import { PlayerPresented } from './Player.presented';

describe('PlayerDTO presenter', () => {
  it('Present player resource', () => {
    const user = new PlayerBuilder()
      .withFirstName('Rafael')
      .withLastName('Nadal')
      .withShortName('R.NAD')
      .withSex('M')
      .withCountry({
        picture:
          'https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png',
        code: 'ESP',
      })
      .withPicture(
        'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
      )
      .withData({
        rank: 1,
        points: 1982,
        weight: 85000,
        height: 185,
        age: 33,
        last: [1, 0, 0, 0, 1],
      })
      .build();

    const userPresented = PlayerPresenter.present(user);
    const expectedUserPresented: PlayerPresented = {
      firstName: 'Rafael',
      lastName: 'Nadal',
      shortName: 'R.NAD',
      sex: 'M',
      country: {
        picture:
          'https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png',
        code: 'ESP',
      },
      picture:
        'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
      data: {
        rank: 1,
        points: 1982,
        weight: 85000,
        height: 185,
        age: 33,
        last: [1, 0, 0, 0, 1],
      },
    };

    expect(userPresented).toEqual(expectedUserPresented);
  });
});
