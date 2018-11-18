import { navigate } from './navigate';

// Interfaces
import { Direction, Instruction } from './navigate.interfaces';

describe('navigate', () => {
  it('should return new location and direction of object after navigating', () => {
    const robot = {
      xAxis: 1,
      yAxis: 1,
      direction: Direction.East
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

    expect(navigate(robot, instructions)).toEqual(result);
  });
});
