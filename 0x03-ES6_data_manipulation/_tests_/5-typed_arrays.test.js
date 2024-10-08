import createInt8TypedArray from '../5-typed_arrays.js';

describe('createInt8TypedArray', () => {
  it('should return a new ArrayBuffer with an Int8 value at a specific position', () => {
    const dataView = createInt8TypedArray(10, 2, 89);
    expect(dataView.getInt8(2)).toBe(89);
  });

  it('should throw an error if the position is outside the range', () => {
    expect(() => {
      createInt8TypedArray(10, 20, 89);
    }).toThrow('Position outside range');
  });
});
