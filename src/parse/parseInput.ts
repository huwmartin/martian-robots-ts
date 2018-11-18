// Packages
import { chunk } from 'lodash';
import { readFileSync, PathLike } from 'fs';

// Utilities
import { mapGridInput, mapMissionInput } from './mapInput';

// Interfaces
import { RobotMission } from '../process/simulateMissions';
import { Grid } from '../navigate/navigate.interfaces';

const parseInput = (path: PathLike) => readFileSync(path, 'utf8').split('\n');

export const parseGridData = (path: PathLike): Grid => {
  const gridInput = parseInput(path)[0].split(' ');

  return mapGridInput(gridInput);
};

export const parseMissions = (path: PathLike): RobotMission[] => {
  const [, ...missionInputs] = parseInput(path);

  // chunk the array of mission inputs into smaller arrays of two
  const chunkedMissionInputs = chunk(missionInputs, 2);

  return chunkedMissionInputs
    .map((missionInput: string[]) => {
      const [robotInput = '', instructionsInput = ''] = missionInput;

      const splitRobotInput = robotInput.split(' ');
      const splitInstructionsInput = instructionsInput.split('');

      return mapMissionInput(splitRobotInput, splitInstructionsInput);
    });
};