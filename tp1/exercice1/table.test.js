import { describe, expect, it } from 'vitest';
import { sortAscending } from './table';

describe('sortAscending', () => {
  describe('sorting behavior', () => {
    it('should sort array in ascending order', () => {
      expect(sortAscending([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    });

    it('should handle negative and positive numbers', () => {
      expect(sortAscending([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3]);
    });

    it('should handle single element', () => {
      expect(sortAscending([42])).toEqual([42]);
    });
  });

  describe('immutability', () => {
    it('should not mutate original array and return new instance', () => {
      const original = [3, 1, 2];
      const result = sortAscending(original);

      expect(original).toEqual([3, 1, 2]);
      expect(result).not.toBe(original);
    });
  });

  describe('error handling', () => {
    it('should throw Error when input is not an array', () => {
      expect(() => sortAscending('not an array')).toThrow('Input must be an array');
    });

    it('should throw Error when array is empty', () => {
      expect(() => sortAscending([])).toThrow('Array cannot be empty');
    });

    it('should throw TypeError when element is not a number', () => {
      expect(() => sortAscending([1, 'two', 3])).toThrow(TypeError);
    });

    it('should throw TypeError when element is not an integer', () => {
      expect(() => sortAscending([1, 2.5, 3])).toThrow(TypeError);
    });
  });
});
