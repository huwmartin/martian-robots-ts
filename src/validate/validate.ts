import { Grid } from '../navigate/navigate.interfaces';

export const maxValue50 = (message: string) => (value: number) => {
  if (value > 50) throw new Error(message);
};

export const minValue0 = (message: string) => (value: number) => {
  if (value < 0) throw new Error(message);
};

const axisMaxValue50 = maxValue50('The maximum value for any coordinate is 50.');
const axisMinValue0 = minValue0('The minimum value for any coordinate is 0.');

export const validateGrid = (grid: Grid) => {
  const { xAxisBound, yAxisBound } = grid;

  axisMaxValue50(xAxisBound);
  axisMaxValue50(yAxisBound);
  axisMinValue0(xAxisBound);
  axisMinValue0(yAxisBound);
};

export default {
  validateGrid,
};
