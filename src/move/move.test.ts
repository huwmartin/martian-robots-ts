import { move } from './move';

// Interfaces
import { Direction, Instruction } from '../navigate/navigate.interfaces';

describe('move', () => {
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

      expect(move(robot, Instruction.Forward)).toEqual(result);
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

      expect(move(robot, Instruction.Forward)).toEqual(result);
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

      expect(move(robot, Instruction.Forward)).toEqual(result);
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

      expect(move(robot, Instruction.Forward)).toEqual(result);
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

      expect(move(robot, Instruction.Left)).toEqual(result);
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

      expect(move(robot, Instruction.Left)).toEqual(result);
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

      expect(move(robot, Instruction.Left)).toEqual(result);
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

      expect(move(robot, Instruction.Left)).toEqual(result);
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

      expect(move(robot, Instruction.Right)).toEqual(result);
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

      expect(move(robot, Instruction.Right)).toEqual(result);
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

      expect(move(robot, Instruction.Right)).toEqual(result);
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

      expect(move(robot, Instruction.Right)).toEqual(result);
    });
  });
});
