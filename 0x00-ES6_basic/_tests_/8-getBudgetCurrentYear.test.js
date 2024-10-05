import getBudgetForCurrentYear from '../8-getBudgetCurrentYear.js';

describe('getBudgetForCurrentYear', () => {
  it('should return an object with budget details for the current year', () => {
    const currentYear = new Date().getFullYear();
    const budget = getBudgetForCurrentYear(2100, 5200, 1090);

    expect(budget).toEqual({
      [`income-${currentYear}`]: 2100,
      [`gdp-${currentYear}`]: 5200,
      [`capita-${currentYear}`]: 1090,
    });
  });
});

