import { Instruction, Robot, Direction, Grid } from '../navigate/navigate.interfaces';

const incrementY = (robot: Robot) => ({
  ...robot,
  yAxis: robot.yAxis + 1,
});

const decrementY = (robot: Robot) => ({
  ...robot,
  yAxis: robot.yAxis - 1,
});

const incrementX = (robot: Robot) => ({
  ...robot,
  xAxis: robot.xAxis + 1,
});

const decrementX = (robot: Robot) => ({
  ...robot,
  xAxis: robot.xAxis - 1,
});

const forwardNorth = (grid: Grid, robot: Robot) => {
  if (robot.yAxis === grid.yAxisBound) {
    return {
      ...robot,
      isLost: true,
    };
  }

  return incrementY(robot);
};

const forwardSouth = (grid: Grid, robot: Robot) => {
  if (robot.yAxis === 0) {
    return {
      ...robot,
      isLost: true,
    };
  }

  return decrementY(robot);
};

const forwardEast = (grid: Grid, robot: Robot) => {
  if (robot.xAxis === grid.xAxisBound) {
    return {
      ...robot,
      isLost: true,
    };
  }

  return incrementX(robot);
};

const forwardWest = (grid: Grid, robot: Robot) => {
  if (robot.xAxis === 0) {
    return {
      ...robot,
      isLost: true,
    };
  }

  return decrementX(robot);
};

const forward = (grid: Grid, robot: Robot) => {
  const { direction } = robot;

  switch (direction) {
    case Direction.North:
      return forwardNorth(grid, robot);
    case Direction.South:
      return forwardSouth(grid, robot);
    case Direction.East:
      return forwardEast(grid, robot);
    case Direction.West:
      return forwardWest(grid, robot);
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

export const move = (grid: Grid, robot: Robot, instruction: Instruction) => {
  switch (instruction) {
    case Instruction.Forward:
      return forward(grid, robot);
    case Instruction.Left:
    case Instruction.Right:
      return turn(robot, instruction);
    default:
      return robot;
  }
};

export default {
  move,
};