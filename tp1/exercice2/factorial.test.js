import { describe, expect, it } from 'vitest';
import { factorial } from './factorial';

describe('factorial', () => {
  describe('calculation behavior', () => {
    it('should return 1 for factorial(0)', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should return 1 for factorial(1)', () => {
      expect(factorial(1)).toBe(1);
    });

    it('should return 120 for factorial(5)', () => {
      expect(factorial(5)).toBe(120);
    });

    it('should return 3628800 for factorial(10)', () => {
      expect(factorial(10)).toBe(3628800);
    });
  });

  describe('error handling', () => {
    it('should throw TypeError when input is not a number', () => {
      expect(() => factorial('5')).toThrow(TypeError);
      expect(() => factorial('5')).toThrow('n must be a number');
    });

    it('should throw TypeError when input is NaN', () => {
      expect(() => factorial(NaN)).toThrow(TypeError);
      expect(() => factorial(NaN)).toThrow('n must be a number');
    });

    it('should throw RangeError when input is negative', () => {
      expect(() => factorial(-1)).toThrow(RangeError);
      // Isolee des cas particulier pour les tests. Et ajouter aussi le test plus general avec le RangeError. 
      // Permet de tester les deux types d'erreurs.
      expect(() => factorial(-1)).toThrow();
      expect(() => factorial(-1)).toThrow('n must be non-negative');
    });

    it('should throw RangeError when input is a decimal/float', () => {
      expect(() => factorial(3.5)).toThrow(RangeError);
      expect(() => factorial(3.5)).toThrow('n must be an integer');
      expect(() => factorial(0.1)).toThrow(RangeError);
      expect(() => factorial(2.999)).toThrow(RangeError);
    });
  });
});
