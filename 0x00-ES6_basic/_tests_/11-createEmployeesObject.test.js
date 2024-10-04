import createEmployeesObject from '../11-createEmployeesObject.js';

describe('createEmployeesObject', () => {
  test('should create an object with department name as key and employees as value', () => {
    const result = createEmployeesObject("Software", ["Bob", "Sylvie"]);
    expect(result).toEqual({ Software: ['Bob', 'Sylvie'] });
  });

  test('should handle empty employees array', () => {
    const result = createEmployeesObject("HR", []);
    expect(result).toEqual({ HR: [] });
  });

  test('should handle multiple employees', () => {
    const result = createEmployeesObject("Marketing", ["Alice", "John", "Doe"]);
    expect(result).toEqual({ Marketing: ['Alice', 'John', 'Doe'] });
  });
});

