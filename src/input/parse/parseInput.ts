// Packages
import { chunk } from 'lodash';

// Utilities
import { mapGridInput, mapMissionInput } from './mapInput';

// Interfaces
import { RobotMission } from '../../process/simulateMissions';
import { Grid } from '../../navigate/navigate.interfaces';

// Validators
import { validateGrid, validateRobot, validateInstructions } from '../../validate/validate';

export const parseGridData = (input: string[]): Grid => {
  const gridInput = input[0].split(' ');

  const mappedGridInput = mapGridInput(gridInput);

  validateGrid(mappedGridInput);

  return mappedGridInput;
};

export const parseMissions = (input: string[]): RobotMission[] => {
  const [, ...missionInputs] = input;

  // chunk the array of mission inputs into smaller arrays of two
  const chunkedMissionInputs = chunk(missionInputs, 2);

  return chunkedMissionInputs
    .map((missionInput: string[]) => {
      const [robotInput = '', instructionsInput = ''] = missionInput;

      const splitRobotInput = robotInput.split(' ');
      const splitInstructionsInput = instructionsInput.split('');

      const mappedMissionInput = mapMissionInput(splitRobotInput, splitInstructionsInput);

      validateRobot(mappedMissionInput.robot);
      validateInstructions(mappedMissionInput.instructions);

      return mappedMissionInput;
    });
};

export default {
  parseGridData,
  parseMissions,
};
