// Interfaces
import { RobotMission } from '../process/simulateMissions';
import { Direction } from '../navigate/navigate.interfaces';
import { Instruction } from '../navigate/navigate.interfaces';

export const mapGridInput = (gridInput: string[]) => ({
  xAxisBound: Number(gridInput[0]),
  yAxisBound: Number(gridInput[1]),
});

export const mapMissionInput = (robotInput: string[], instructionsInput: string[]): RobotMission => ({
  robot: {
    xAxis: Number(robotInput[0]),
    yAxis: Number(robotInput[1]),
    direction: robotInput[2] as Direction,
  },
  instructions: instructionsInput as Instruction[],
});