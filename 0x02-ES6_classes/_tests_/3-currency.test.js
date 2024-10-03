import Currency from '../3-currency';

describe('Currency class', () => {
  it('should create a Currency object with correct attributes', () => {
    const currency = new Currency('$', 'Dollars');
    expect(currency.code).toBe('$');
    expect(currency.name).toBe('Dollars');
  });

  it('should update code and name with setters', () => {
    const currency = new Currency('$', 'Dollars');
    currency.code = 'USD';
    currency.name = 'US Dollars';
    expect(currency.code).toBe('USD');
    expect(currency.name).toBe('US Dollars');
  });

  it('should return the correct full currency description', () => {
    const currency = new Currency('EUR', 'Euro');
    expect(currency.displayFullCurrency()).toBe('Euro (EUR)');
  });
});

