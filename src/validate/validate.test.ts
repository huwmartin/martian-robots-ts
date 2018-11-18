import { maxValue50, minValue0 } from './validate';

describe('validate', () => {
  describe('maxValue50', () => {
    const maxValue50Validator = maxValue50('The maximum value for any coordinate is 50.');

    it('should not throw error when value is less than 51', () => {
      expect(() => maxValue50Validator(50)).not.toThrow();
    });

    it('should throw error when x-axis is greater than 50', () => {
      const error = new Error('The maximum value for any coordinate is 50.');

      expect(() => maxValue50Validator(51)).toThrowError(error);
    });
  });

  describe('minValue0', () => {
    const minValue0Validator = minValue0('The minimum value for any coordinate is 0.');

    it('should not throw error when both axis are greater than 0', () => {
      expect(() => minValue0Validator(0)).not.toThrow();
    });

    it('should throw error when value is less than 0', () => {
      const error = new Error('The minimum value for any coordinate is 0.');

      expect(() => minValue0Validator(-1)).toThrowError(error);
    });
  });
});
