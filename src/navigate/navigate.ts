import { move } from '../move/move';

// Interfaces
import { Grid, Robot, Instruction, Scent } from './navigate.interfaces';

export const navigate = (grid: Grid, scents: Scent[], robot: Robot, instructions: Instruction[]): Robot => {
  return instructions
    .reduce((currentRobotState: Robot, instruction: Instruction) => {
      if (currentRobotState.isLost) return currentRobotState;

      return move(grid, scents, currentRobotState, instruction);
    }, robot);
};

export default {
  navigate
};
