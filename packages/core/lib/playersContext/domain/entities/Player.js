'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Player {
  constructor(
    _firstName,
    _lastName,
    _shortName,
    _sex,
    _country,
    _picture,
    _data,
  ) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._shortName = _shortName;
    this._sex = _sex;
    this._country = _country;
    this._picture = _picture;
    this._data = _data;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get shortName() {
    return this._shortName;
  }
  get sex() {
    return this._sex;
  }
  get country() {
    return this._country;
  }
  get picture() {
    return this._picture;
  }
  get data() {
    return this._data;
  }
}
exports.Player = Player;
