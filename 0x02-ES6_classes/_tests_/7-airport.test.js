import Airport from '../7-airport.js';

describe('Airport Class', () => {
  it('should correctly instantiate an Airport object', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport._name).toBe('San Francisco Airport');
    expect(airport._code).toBe('SFO');
  });

  it('should return the correct string from toString()', () => {
    const airport = new Airport('San Francisco Airport', 'SFO');
    expect(airport.toString()).toBe('[object SFO]');
  });
});

