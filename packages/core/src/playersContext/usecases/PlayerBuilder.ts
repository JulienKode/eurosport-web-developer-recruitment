import { Player } from "core/src/playersContext/domain/entities/Player";
import { Gender } from "core/src/playersContext/domain/entities/Gender";
import { Country } from "core/src/playersContext/domain/entities/Country";
import { PlayerData } from "core/src/playersContext/domain/entities/PlayerData";

export class PlayerBuilder {
  protected _firstName!: string;
  protected _lastName!: string;
  protected _shortName!: string;
  protected _sex!: Gender;
  protected _country!: Country;
  protected _picture!: string;
  protected _data!: PlayerData;

  withFirstName(firstName: string): PlayerBuilder {
    this._firstName = firstName;
    return this;
  }

  withLastName(lastName: string): PlayerBuilder {
    this._lastName = lastName;
    return this;
  }

  withShortName(shortName: string): PlayerBuilder {
    this._shortName = shortName;
    return this;
  }

  withSex(sex: Gender): PlayerBuilder {
    this._sex = sex;
    return this;
  }

  withCountry(country: Country): PlayerBuilder {
    this._country = country;
    return this;
  }

  withPicture(picture: string): PlayerBuilder {
    this._picture = picture;
    return this;
  }

  withData(data: PlayerData): PlayerBuilder {
    this._data = data;
    return this;
  }

  build(): Player {
    return new Player(
      this._firstName,
      this._lastName,
      this._shortName,
      this._sex,
      this._country,
      this._picture,
      this._data
    );
  }
}
