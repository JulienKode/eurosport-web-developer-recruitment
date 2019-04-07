declare enum PlayerDataKeys {
  rank = 'rank',
  points = 'points',
  weight = 'weight',
  height = 'height',
  age = 'age',
  last = 'last',
}
export interface PlayerData
  extends Partial<Record<PlayerDataKeys, number | number[]>> {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
}
export {};
