import { navigate } from './navigate';

// Interfaces
import { Direction, Instruction } from './navigate.interfaces';

describe('navigate', () => {
  it('should return new location and direction of object after navigating', () => {
    const grid = {
      xAxisBound: 5,
      yAxisBound: 3,
    };
    const robot = {
      xAxis: 1,
      yAxis: 1,
      direction: Direction.East,
    };
    const instructions = [
      Instruction.Right,
      Instruction.Forward,
      Instruction.Right,
      Instruction.Forward,
      Instruction.Right,
      Instruction.Forward,
      Instruction.Right,
      Instruction.Forward,
    ];

    const result = {
      xAxis: 1,
      yAxis: 1,
      direction: Direction.East
    };

    expect(navigate(grid, robot, instructions)).toEqual(result);
  });

  it('should return object with property isLost if it exits grid bounds', () => {
    const grid = {
      xAxisBound: 5,
      yAxisBound: 3,
    };
    const robot = {
      xAxis: 3,
      yAxis: 2,
      direction: Direction.North,
    };
    const instructions = [
      Instruction.Forward,
      Instruction.Right,
      Instruction.Right,
      Instruction.Forward,
      Instruction.Left,
      Instruction.Left,
      Instruction.Forward,
      Instruction.Forward,
      Instruction.Right,
      Instruction.Right,
      Instruction.Forward,
      Instruction.Left,
      Instruction.Left,
    ];

    const result = {
      xAxis: 3,
      yAxis: 3,
      direction: Direction.North,
      isLost: true,
    };

    expect(navigate(grid, robot, instructions)).toEqual(result);
  });
});
