// Interfaces
import { Robot } from '../navigate/navigate.interfaces';

const replaceParams = (path: string, map: object) => path && path.replace(/\{\{([a-z\-.0-9]*)\}\}/gi, (match, param) => (map[param] ? map[param] : match));

export const mapMissionOutput = (robot: Robot) => {
  const { isLost } = robot;

  if (isLost) return `${replaceParams('{{xAxis}} {{yAxis}} {{direction}}', robot)} LOST`;

  return replaceParams('{{xAxis}} {{yAxis}} {{direction}}', robot);
};

export default {
  mapMissionOutput,
};
