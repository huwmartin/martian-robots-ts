import { move } from './move';

// Interfaces
import { Direction, Instruction } from '../navigate/navigate.interfaces';

describe('move', () => {
  const grid = {
    xAxisBound: 5,
    yAxisBound: 3,
  };

  describe('when instruction is Forward', () => {
    it('when direction is North', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.North,
      };

      const result = {
        xAxis: 2,
        yAxis: 3,
        direction: Direction.North,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when direction is South', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.South,
      };

      const result = {
        xAxis: 2,
        yAxis: 1,
        direction: Direction.South,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when direction is East', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.East,
      };

      const result = {
        xAxis: 3,
        yAxis: 2,
        direction: Direction.East,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when direction is West', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      const result = {
        xAxis: 1,
        yAxis: 2,
        direction: Direction.West,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when object exits upper x-axis grid bounds', () => {
      const robot = {
        xAxis: 5,
        yAxis: 2,
        direction: Direction.East,
      };

      const result = {
        xAxis: 5,
        yAxis: 2,
        direction: Direction.East,
        isLost: true,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when object exits upper y-axis grid bounds', () => {
      const robot = {
        xAxis: 2,
        yAxis: 3,
        direction: Direction.North,
      };

      const result = {
        xAxis: 2,
        yAxis: 3,
        direction: Direction.North,
        isLost: true,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when object exits lower x-axis grid bounds', () => {
      const robot = {
        xAxis: 0,
        yAxis: 2,
        direction: Direction.West,
      };

      const result = {
        xAxis: 0,
        yAxis: 2,
        direction: Direction.West,
        isLost: true,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });

    it('when object exits lower y-axis grid bounds', () => {
      const robot = {
        xAxis: 2,
        yAxis: 0,
        direction: Direction.South,
      };

      const result = {
        xAxis: 2,
        yAxis: 0,
        direction: Direction.South,
        isLost: true,
      };

      expect(move(grid, robot, Instruction.Forward)).toEqual(result);
    });
  });

  describe('when instruction is Left', () => {
    it('when direction is North', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.North,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      expect(move(grid, robot, Instruction.Left)).toEqual(result);
    });

    it('when direction is South', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.South,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.East,
      };

      expect(move(grid, robot, Instruction.Left)).toEqual(result);
    });

    it('when direction is East', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.East,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.North,
      };

      expect(move(grid, robot, Instruction.Left)).toEqual(result);
    });

    it('when direction is West', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.South,
      };

      expect(move(grid, robot, Instruction.Left)).toEqual(result);
    });
  });

  describe('when instruction is Right', () => {
    it('when direction is North', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.North,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.East,
      };

      expect(move(grid, robot, Instruction.Right)).toEqual(result);
    });

    it('when direction is South', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.South,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      expect(move(grid, robot, Instruction.Right)).toEqual(result);
    });

    it('when direction is East', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.East,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.South,
      };

      expect(move(grid, robot, Instruction.Right)).toEqual(result);
    });

    it('when direction is West', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      const result = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.North,
      };

      expect(move(grid, robot, Instruction.Right)).toEqual(result);
    });
  });
});
