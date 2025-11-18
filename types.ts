export interface Dimensions {
  diameterMm: number;
  frequencyGhz: number;
}

export interface CalculationResult {
  isValid: boolean;
  errors: string[];
  wavelengthAir: number; // Lambda 0
  cutoffFrequency: number; // Fc
  guideWavelength: number; // Lambda g
  probePosition: number; // Lambda g / 4
  probeLength: number; // Lambda 0 / 4
  minCanLength: number; // 0.75 * Lambda g
  optimalCanLength: number;
}

export enum AppTab {
  CALCULATOR = 'CALCULATOR',
  THEORY = 'THEORY',
  CONSTRUCTION = 'CONSTRUCTION'
}