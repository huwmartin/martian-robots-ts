// Packages
import { readFileSync, PathLike } from 'fs';

export const readInput = (path: PathLike) => readFileSync(path, 'utf8').split('\n');

export default {
  readInput,
};
