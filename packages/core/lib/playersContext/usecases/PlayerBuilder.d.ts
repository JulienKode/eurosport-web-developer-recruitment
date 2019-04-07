import { Player } from 'core/src/playersContext/domain/entities/Player';
import { Gender } from 'core/src/playersContext/domain/entities/Gender';
import { Country } from 'core/src/playersContext/domain/entities/Country';
import { PlayerData } from 'core/src/playersContext/domain/entities/PlayerData';
export declare class PlayerBuilder {
  protected _firstName: string;
  protected _lastName: string;
  protected _shortName: string;
  protected _sex: Gender;
  protected _country: Country;
  protected _picture: string;
  protected _data: PlayerData;
  withFirstName(firstName: string): PlayerBuilder;
  withLastName(lastName: string): PlayerBuilder;
  withShortName(shortName: string): PlayerBuilder;
  withSex(sex: Gender): PlayerBuilder;
  withCountry(country: Country): PlayerBuilder;
  withPicture(picture: string): PlayerBuilder;
  withData(data: PlayerData): PlayerBuilder;
  build(): Player;
}
