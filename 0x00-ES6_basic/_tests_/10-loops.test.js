import appendToEachArrayValue from '../10-loops';

describe('appendToEachArrayValue', () => {
  it('should append the string to each value in the array', () => {
    const result = appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-');
    
    expect(result).toEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
  });

  it('should return the same array if empty', () => {
    const result = appendToEachArrayValue([], 'empty-');
    
    expect(result).toEqual([]);
  });
});

