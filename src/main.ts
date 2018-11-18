import { readInput } from './input/read/readInput';
import { parseGridData, parseMissions } from './input/parse/parseInput';
import { processMissions } from './process/simulateMissions';
import { writeOutput } from './output/write/writeOutput';

const main = () => {
  const input = readInput('input.txt');

  const grid = parseGridData(input);
  const missions = parseMissions(input);

  const result = processMissions(grid, missions);

  writeOutput(result);
};

main();
