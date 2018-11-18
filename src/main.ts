import { readInput } from './parse/readInput';
import { parseGridData, parseMissions } from './parse/parseInput';
import { processMissions } from './process/simulateMissions';
import { writeOutput } from './write/writeOutput';

const main = () => {
  const input = readInput('input.txt');

  const grid = parseGridData(input);
  const missions = parseMissions(input);

  const result = processMissions(grid, missions);

  writeOutput(result);
};

main();
