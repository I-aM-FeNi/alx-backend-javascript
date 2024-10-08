import cleanSet from '../8-clean_set.js';

describe('cleanSet', () => {
  it('should return a string of all the set values that start with a specific string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });

  it('should return an empty string if startString is empty', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, '')).toBe('');
  });

  it('should return an empty string if no values start with startString', () => {
    const set = new Set(['apple', 'orange', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('');
  });
});

