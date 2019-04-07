export interface CountryDTO {
  picture: string;
  code: string;
}
export interface PlayerDataDTO {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
}
declare type GenderDTO = 'M' | 'F';
export interface PlayerDTO {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: GenderDTO;
  country: CountryDTO;
  picture: string;
  data: PlayerDataDTO;
}
export {};
