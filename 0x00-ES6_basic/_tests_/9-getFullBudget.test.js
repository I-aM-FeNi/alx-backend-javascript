import getFullBudgetObject from '../9-getFullBudget';

describe('getFullBudgetObject', () => {
  it('should return an object with income, gdp, capita and method properties', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    
    expect(fullBudget).toHaveProperty('income', 20);
    expect(fullBudget).toHaveProperty('gdp', 50);
    expect(fullBudget).toHaveProperty('capita', 10);
    expect(fullBudget).toHaveProperty('getIncomeInDollars');
    expect(fullBudget).toHaveProperty('getIncomeInEuros');
  });

  it('should format income in dollars correctly', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    
    expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
  });

  it('should format income in euros correctly', () => {
    const fullBudget = getFullBudgetObject(20, 50, 10);
    
    expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
  });
});

