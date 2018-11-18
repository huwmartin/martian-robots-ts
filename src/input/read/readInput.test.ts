import { readInput } from './readInput';

jest.mock('fs');

const testInput =
`5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL`;

describe('readInput', () => {
  const MOCK_FILE_INFO = {
    'input.txt': testInput,
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  it('should read input from file and split by line', () => {
    const result = [
      '5 3',
      '1 1 E',
      'RFRFRFRF',
      '3 2 N',
      'FRRFLLFFRRFLL',
      '0 3 W',
      'LLFFFLFLFL'
    ];

    expect(readInput('input.txt')).toEqual(result);
  });
});
