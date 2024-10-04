import getBudgetObject from '../7-getBudgetObject.js';

describe('getBudgetObject', () => {
  it('should return an object with income, gdp, and capita', () => {
    const result = getBudgetObject(400, 700, 900);
    expect(result).toEqual({
      income: 400,
      gdp: 700,
      capita: 900,
    });
  });

  it('should return an object with default values when no arguments are passed', () => {
    const result = getBudgetObject();
    expect(result).toEqual({
      income: undefined,
      gdp: undefined,
      capita: undefined,
    });
  });
});

