import { Gender } from './Gender';
import { Country } from './Country';
import { PlayerData } from './PlayerData';
export declare class Player {
  private _firstName;
  private _lastName;
  private _shortName;
  private _sex;
  private _country;
  private _picture;
  private _data;
  constructor(
    _firstName: string,
    _lastName: string,
    _shortName: string,
    _sex: Gender,
    _country: Country,
    _picture: string,
    _data: PlayerData,
  );
  readonly firstName: string;
  readonly lastName: string;
  readonly shortName: string;
  readonly sex: Gender;
  readonly country: Country;
  readonly picture: string;
  readonly data: PlayerData;
}
