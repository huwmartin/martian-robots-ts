import { move } from '../move/move';

// Interfaces
import { Robot, Instruction } from './navigate.interfaces';

export const navigate = (robot: Robot, instructions: Instruction[]) => {
  return instructions
    .reduce((currentRobotState: Robot, instruction: Instruction) => {
      return move(currentRobotState, instruction);
    }, robot);
};

export default {
  navigate
};
