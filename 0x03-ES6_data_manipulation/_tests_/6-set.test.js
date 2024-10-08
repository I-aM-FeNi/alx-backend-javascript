import setFromArray from '../6-set.js';

describe('setFromArray', () => {
  it('should return a Set from an array', () => {
    const result = setFromArray([12, 32, 15, 78, 98, 15]);
    expect(result).toEqual(new Set([12, 32, 15, 78, 98]));
  });

  it('should return an empty Set if the array is empty', () => {
    const result = setFromArray([]);
    expect(result).toEqual(new Set());
  });
});
