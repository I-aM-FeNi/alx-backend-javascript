import concatArrays from '../5-spread-operator.js';

describe('concatArrays', () => {
  it('should concatenate two arrays and a string', () => {
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
  });

  it('should handle empty arrays and empty string', () => {
    expect(concatArrays([], [], '')).toEqual([]);
  });

  it('should handle one empty array', () => {
    expect(concatArrays(['a'], [], 'Hello')).toEqual(['a', 'H', 'e', 'l', 'l', 'o']);
    expect(concatArrays([], ['c', 'd'], 'World')).toEqual(['c', 'd', 'W', 'o', 'r', 'l', 'd']);
  });

  it('should handle multiple characters in the string', () => {
    expect(concatArrays(['x', 'y'], ['z'], 'ABC')).toEqual(['x', 'y', 'z', 'A', 'B', 'C']);
  });
});

