import { Instruction, Robot, Direction } from '../navigate/navigate.interfaces';

const forwardNorth = (robot: Robot) => ({
  ...robot,
  yAxis: robot.yAxis + 1,
});

const forwardSouth = (robot: Robot) => ({
  ...robot,
  yAxis: robot.yAxis - 1,
});

const forwardEast = (robot: Robot) => ({
  ...robot,
  xAxis: robot.xAxis + 1,
});

const forwardWest = (robot: Robot) => ({
  ...robot,
  xAxis: robot.xAxis - 1,
});

const forward = (robot: Robot) => {
  const { direction } = robot;

  switch (direction) {
    case Direction.North:
      return forwardNorth(robot);
    case Direction.South:
      return forwardSouth(robot);
    case Direction.East:
      return forwardEast(robot);
    case Direction.West:
      return forwardWest(robot);
    default:
      return robot;
  }
};

const left = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Direction.West;
    case Direction.South:
      return Direction.East;
    case Direction.East:
      return Direction.North;
    case Direction.West:
      return Direction.South;
    default:
      return direction;
  }
};

const right = (direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return Direction.East;
    case Direction.South:
      return Direction.West;
    case Direction.East:
      return Direction.South;
    case Direction.West:
      return Direction.North;
    default:
      return direction;
  }
};

const turn = (robot: Robot, turningDirection: Instruction.Left | Instruction.Right) => {
  switch (turningDirection) {
    case Instruction.Left:
      return {
        ...robot,
        direction: left(robot.direction),
      };
    case Instruction.Right:
    return {
      ...robot,
      direction: right(robot.direction),
    };
    default:
      return robot;
  }
};

export const move = (robot: Robot, instruction: Instruction) => {
  switch (instruction) {
    case Instruction.Forward:
      return forward(robot);
    case Instruction.Left:
    case Instruction.Right:
      return turn(robot, instruction);
    default:
      return robot;
  }
};
