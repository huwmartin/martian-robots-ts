// Interfaces
import { Grid, Robot, Instruction } from '../navigate/navigate.interfaces';

export const maxValue50 = (message: string) => (value: number) => {
  if (value > 50) throw new Error(message);
};

export const minValue0 = (message: string) => (value: number) => {
  if (value < 0) throw new Error(message);
};

export const maxLength99 = (message: string) => (value: any[]) => {
  if (value.length > 99) throw new Error(message);
};

const axisMaxValue50 = maxValue50('The maximum value for any coordinate is 50.');
const axisMinValue0 = minValue0('The minimum value for any coordinate is 0.');

const instructionsMaxLength99 = maxLength99('All instruction strings must be less than 100 characters in length.');

export const validateGrid = (grid: Grid) => {
  const { xAxisBound, yAxisBound } = grid;

  axisMaxValue50(xAxisBound);
  axisMaxValue50(yAxisBound);
  axisMinValue0(xAxisBound);
  axisMinValue0(yAxisBound);
};

export const validateRobot = (robot: Robot) => {
  const { xAxis, yAxis } = robot;

  axisMaxValue50(xAxis);
  axisMaxValue50(yAxis);
  axisMinValue0(xAxis);
  axisMinValue0(yAxis);
};

export const validateInstructions = (instructions: Instruction[]) => {
  instructionsMaxLength99(instructions);
};

export default {
  validateGrid,
  validateRobot,
  validateInstructions,
};
