import { mapGridInput, mapMissionInput } from './mapInput';

// Interfaces
import { Direction, Instruction } from '../../navigate/navigate.interfaces';

describe('mapInput', () => {
  it('mapGridInput', () => {
    const input = ['5', '3'];

    const result = {
      xAxisBound: 5,
      yAxisBound: 3,
    };

    expect(mapGridInput(input)).toEqual(result);
  });

  describe('mapMissionInput', () => {
    const robotInput = ['1', '1', 'E'];
    const instructionsInput = ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'];

    const result = {
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
    };

    expect(mapMissionInput(robotInput, instructionsInput)).toEqual(result);
  });
});
