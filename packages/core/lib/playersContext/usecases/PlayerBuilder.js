'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const Player_1 = require('core/src/playersContext/domain/entities/Player');
class PlayerBuilder {
  withFirstName(firstName) {
    this._firstName = firstName;
    return this;
  }
  withLastName(lastName) {
    this._lastName = lastName;
    return this;
  }
  withShortName(shortName) {
    this._shortName = shortName;
    return this;
  }
  withSex(sex) {
    this._sex = sex;
    return this;
  }
  withCountry(country) {
    this._country = country;
    return this;
  }
  withPicture(picture) {
    this._picture = picture;
    return this;
  }
  withData(data) {
    this._data = data;
    return this;
  }
  build() {
    return new Player_1.Player(
      this._firstName,
      this._lastName,
      this._shortName,
      this._sex,
      this._country,
      this._picture,
      this._data,
    );
  }
}
exports.PlayerBuilder = PlayerBuilder;
