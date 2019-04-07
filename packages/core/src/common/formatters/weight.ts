export enum EWeightUnit {
  grams = 1,
  kilograms = 1000,
}

export const formatGrams = (number: number, to: EWeightUnit) => {
  switch (to) {
    case EWeightUnit.kilograms:
      return number / EWeightUnit.kilograms;
    case EWeightUnit.grams:
      return number / EWeightUnit.grams;
  }
};
