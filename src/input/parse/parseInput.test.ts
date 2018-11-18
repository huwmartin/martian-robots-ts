import { parseGridData, parseMissions } from './parseInput';

// Interfaces
import { Instruction } from '../../navigate/navigate.interfaces';
import { Direction } from '../../navigate/navigate.interfaces';

const testInput = [
  '5 3',
  '1 1 E',
  'RFRFRFRF',
  '3 2 N',
  'FRRFLLFFRRFLL',
  '0 3 W',
  'LLFFFLFLFL'
];

describe('parseInput', () => {
  it('should parse grid dimensions', () => {
    const result = {
      xAxisBound: 5,
      yAxisBound: 3,
    };

    expect(parseGridData(testInput)).toEqual(result);
  });

  it('should surface error if grid dimensions are invalid', () => {
    const input = [
      '5 51',
      '1 1 E',
      'RFRFRFRF',
      '3 2 N',
      'FRRFLLFFRRFLL',
      '0 3 W',
      'LLFFFLFLFL'
    ];

    expect(() => parseGridData(input)).toThrow();
  });

  it('should parse missions', () => {
    const result = [
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

    expect(parseMissions(testInput)).toEqual(result);
  });
});
