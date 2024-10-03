import Pricing from '../4-pricing';
import Currency from '../3-currency';

describe('Pricing class', () => {
  it('should create a Pricing object with correct attributes', () => {
    const currency = new Currency('EUR', 'Euro');
    const pricing = new Pricing(100, currency);
    expect(pricing.amount).toBe(100);
    expect(pricing.currency).toEqual(currency);
  });

  it('should update amount and currency with setters', () => {
    const currency = new Currency('USD', 'US Dollar');
    const pricing = new Pricing(100, currency);
    pricing.amount = 200;
    pricing.currency = new Currency('GBP', 'British Pound');
    expect(pricing.amount).toBe(200);
    expect(pricing.currency.name).toBe('British Pound');
    expect(pricing.currency.code).toBe('GBP');
  });

  it('should return the correct full price description', () => {
    const currency = new Currency('JPY', 'Yen');
    const pricing = new Pricing(1000, currency);
    expect(pricing.displayFullPrice()).toBe('1000 Yen (JPY)');
  });

  it('should correctly convert price with static convertPrice method', () => {
    expect(Pricing.convertPrice(100, 1.2)).toBe(120);
    expect(Pricing.convertPrice(200, 0.5)).toBe(100);
  });
});

