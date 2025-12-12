import { describe, expect, it } from 'vitest';
import { RLE } from './rle';

describe('RLE - Run Length Encoding Algorithm', () => {
    describe('Bug Detection: Missing final sequence', () => {
        
        it('single character should return "1W" - catches BUG #2', () => {
            expect(RLE("W")).toBe("1W");
        });

        it('all same characters should return count + char - catches BUG #2', () => {
            expect(RLE("WWWWW")).toBe("5W");
        });
    });

    describe('Bug Detection: count++ outside else block', () => {
        
        it('two different chars "WB" - catches BUG #1 and #2', () => {
            expect(RLE("WB")).toBe("1W1B");
        });

        it('alternating "WBWB" - catches BUG #1', () => {
            expect(RLE("WBWB")).toBe("1W1B1W1B");
        });

        it('three transitions "WBWBW" - catches BUG #1 clearly', () => {
            expect(RLE("WBWBW")).toBe("1W1B1W1B1W");
        });
    });

    describe('Both bugs detection', () => {
        
        it('grouped sequences "WWWBBB" - catches both bugs', () => {
            expect(RLE("WWWBBB")).toBe("3W3B");
        });

        it('multiple groups "WWWBBBWW" - catches both bugs', () => {
            expect(RLE("WWWBBBWW")).toBe("3W3B2W");
        });

        it('readme example - catches both bugs', () => {
            const input = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW";
            const expected = "12W1B14W3B23W1B11W";
            expect(RLE(input)).toBe(expected);
        });
    });

    describe('Edge cases', () => {
        
        it('empty string should return empty string', () => {
            expect(RLE("")).toBe("");
        });

        it('double-digit count "WWWWWWWWWWWW" (12 W)', () => {    
            expect(RLE("WWWWWWWWWWWW")).toBe("12W");
        });
    });
});
