import { Gender } from "./Gender";
import { Country } from "./Country";
import { PlayerData } from "./PlayerData";

export class Player {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _shortName: string,
    private _sex: Gender,
    private _country: Country,
    private _picture: string,
    private _data: PlayerData
  ) {}

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get shortName(): string {
    return this._shortName;
  }

  get sex(): Gender {
    return this._sex;
  }

  get country(): Country {
    return this._country;
  }

  get picture(): string {
    return this._picture;
  }

  get data(): PlayerData {
    return this._data;
  }
}
