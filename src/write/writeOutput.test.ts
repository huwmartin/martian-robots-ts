import { writeOutput } from './writeOutput';

// Interfaces
import { Direction } from '../navigate/navigate.interfaces';

jest.mock('fs');

describe('writeOutput', () => {
  const MOCK_FILE_INFO = {
    'input.txt': '',
  };

  let fs: any;

  beforeEach(() => {
    // Set up some mocked out file info before each test
    fs = require('fs');
    fs.__setMockFiles(MOCK_FILE_INFO);
  });

  it('should write file with output', () => {
    const input = [
      {
        xAxis: 1,
        yAxis: 1,
        direction: Direction.East
      },
      {
        xAxis: 3,
        yAxis: 3,
        direction: Direction.North,
        isLost: true,
      },
      {
        xAxis: 2,
        yAxis: 3,
        direction: Direction.South,
      },
    ];

    const result = `1 1 E\n3 3 N LOST\n2 3 S`;

    writeOutput(input);

    expect(fs.writeFileSync).toHaveBeenCalledWith('output.txt', result);
  });
});
