import { mapMissionOutput } from './mapOutput';

// Interfaces
import { Direction } from '../../navigate/navigate.interfaces';

describe('mapOutput', () => {
  describe('mapMissionOutput', () => {
    it('should handle successful mission', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
      };

      const result = '2 2 W';

      expect(mapMissionOutput(robot)).toEqual(result);
    });

    it('should handle where isLost is true', () => {
      const robot = {
        xAxis: 2,
        yAxis: 2,
        direction: Direction.West,
        isLost: true,
      };

      const result = '2 2 W LOST';

      expect(mapMissionOutput(robot)).toEqual(result);
    });
  });
});
