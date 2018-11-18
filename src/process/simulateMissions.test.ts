import { processMissions } from './simulateMissions';

// Interfaces
import { Direction, Instruction } from '../navigate/navigate.interfaces';

describe('simulateMissions', () => {
  const grid = {
    xAxisBound: 5,
    yAxisBound: 3,
  };

  it('handle mission with multiple robots', () => {
    const robotMissions = [
      {
        robot: {
          xAxis: 1,
          yAxis: 1,
          direction: Direction.East,
        },
        instructions: [
          Instruction.Right,
          Instruction.Forward,
          Instruction.Right,
          Instruction.Forward,
          Instruction.Right,
          Instruction.Forward,
          Instruction.Right,
          Instruction.Forward,
        ],
      },
      {
        robot: {
          xAxis: 3,
          yAxis: 2,
          direction: Direction.North,
        },
        instructions: [
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
        ],
      },
      {
        robot: {
          xAxis: 0,
          yAxis: 3,
          direction: Direction.West,
        },
        instructions: [
          Instruction.Left,
          Instruction.Left,
          Instruction.Forward,
          Instruction.Forward,
          Instruction.Forward,
          Instruction.Left,
          Instruction.Forward,
          Instruction.Left,
          Instruction.Forward,
          Instruction.Left,
        ],
      },
    ];

    const result = [
      {
        xAxis: 1,
        yAxis: 1,
        direction: Direction.East
      },
      {
        xAxis: 3,
        yAxis: 3,
        direction: Direction.North,
        isLost: true,
      },
      {
        xAxis: 2,
        yAxis: 3,
        direction: Direction.South,
      },
    ];

    expect(processMissions(grid, robotMissions)).toEqual(result);
  });
});