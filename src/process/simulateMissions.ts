import { navigate } from '../navigate/navigate';

// Interfaces
import { Grid, Robot, Scent, Instruction } from '../navigate/navigate.interfaces';

export interface RobotMission {
  robot: Robot;
  instructions: Instruction[];
}

interface Exploration {
  scents: Scent[];
  robots: Robot[];
}

const executeMission = (grid: Grid, previouseMissions: Exploration, mission: RobotMission): Exploration => {
  const completedMission = navigate(grid, previouseMissions.scents, mission.robot, mission.instructions);

  if (completedMission.isLost) {
    return {
      scents: [
        ...previouseMissions.scents,
        {
          xAxis: completedMission.xAxis,
          yAxis: completedMission.yAxis,
        }
      ],
      robots: [
        ...previouseMissions.robots,
        completedMission,
      ],
    };
  }

  return {
    ...previouseMissions,
    robots: [
      ...previouseMissions.robots,
      completedMission,
    ],
  };
};

export const processMissions = (grid: Grid, missions: RobotMission[]): Robot[] => {
  const completedMissions = missions
    .reduce(
      (result: Exploration, mission: RobotMission) => executeMission(grid, result, mission),
      { scents: [], robots: [] }
    );

  return completedMissions.robots;
};

export default {
  processMissions,
};
