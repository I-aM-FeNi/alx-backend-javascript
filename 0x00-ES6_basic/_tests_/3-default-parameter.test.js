import getSumOfHoods from '../3-default-parameter.js';

describe('getSumOfHoods', () => {
  test('should return 142 when only the initial number is provided', () => {
    expect(getSumOfHoods(34)).toBe(142);
  });

  test('should return 56 when initial number and expansion1989 are provided', () => {
    expect(getSumOfHoods(34, 3)).toBe(56);
  });

  test('should return 41 when all parameters are provided', () => {
    expect(getSumOfHoods(34, 3, 4)).toBe(41);
  });
});

