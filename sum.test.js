import { sum } from './sum';
import { test, expect, describe, it, beforeEach, afterEach, beforeAll, afterAll, } from 'vitest';


test('sum', () => {
    expect(sum(1, 2)).toBe(3);
});

