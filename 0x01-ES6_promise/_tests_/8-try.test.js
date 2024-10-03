import divideFunction from '../8-try';

describe('divideFunction', () => {
  test('should return the correct division result', () => {
    expect(divideFunction(10, 2)).toBe(5);
  });

  test('should throw an error when denominator is 0', () => {
    expect(() => divideFunction(10, 0)).toThrow('cannot divide by 0');
  });

  test('should return a negative result if numerator or denominator is negative', () => {
    expect(divideFunction(-10, 2)).toBe(-5);
    expect(divideFunction(10, -2)).toBe(-5);
  });

  test('should return a positive result if both numerator and denominator are negative', () => {
    expect(divideFunction(-10, -2)).toBe(5);
  });
});

