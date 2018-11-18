export enum Direction {
  North = 'N',
  South = 'S',
  East = 'E',
  West = 'W',
}

export enum Instruction {
  Left = 'L',
  Right = 'R',
  Forward = 'F',
}

export interface Grid {
  xAxisBound: number;
  yAxisBound: number;
}

export interface Robot {
  xAxis: number;
  yAxis: number;
  direction: Direction;
  isLost?: boolean;
}
