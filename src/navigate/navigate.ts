import { move } from '../move/move';

// Interfaces
import { Grid, Robot, Instruction } from './navigate.interfaces';

export const navigate = (grid: Grid, robot: Robot, instructions: Instruction[]) => {
  return instructions
    .reduce((currentRobotState: Robot, instruction: Instruction) => {
      if (currentRobotState.isLost) return currentRobotState;

      return move(grid, currentRobotState, instruction);
    }, robot);
};

export default {
  navigate
};
