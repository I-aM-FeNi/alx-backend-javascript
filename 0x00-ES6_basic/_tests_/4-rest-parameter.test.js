import returnHowManyArguments from '../4-rest-parameter.js';

describe('returnHowManyArguments', () => {
  it('should return 1 when one argument is passed', () => {
    expect(returnHowManyArguments("one")).toBe(1);
  });

  it('should return 4 when four arguments are passed', () => {
    expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
  });

  it('should return 0 when no arguments are passed', () => {
    expect(returnHowManyArguments()).toBe(0);
  });

  it('should return 3 when three arguments are passed', () => {
    expect(returnHowManyArguments("apple", "banana", "cherry")).toBe(3);
  });
});

