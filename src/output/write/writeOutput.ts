// Packages
import { writeFileSync } from 'fs';

// Utilities
import { mapMissionOutput } from '../parse/mapOutput';

// Interfaces
import { Robot } from '../../navigate/navigate.interfaces';

export const writeOutput = (robots: Robot[]) => {
  const output = robots
    .map(mapMissionOutput)
    .join('\n');

  writeFileSync('output.txt', output);
};

export default {
  writeOutput,
};
