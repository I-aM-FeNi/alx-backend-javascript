import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';
import createIteratorObject from '../100-createIteratorObject.js';

describe('createIteratorObject', () => {
  test('should iterate through all employees in the report object', () => {
    const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie']),
    };
    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);
    
    const employeeNames = [];
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }

    expect(employeeNames).toEqual(['Bob', 'Jane', 'Sylvie']);
  });

  test('should handle empty report object', () => {
    const report = createReportObject({});
    const reportWithIterator = createIteratorObject(report);
    
    const employeeNames = [];
    for (const employee of reportWithIterator) {
      employeeNames.push(employee);
    }

    expect(employeeNames).toEqual([]);
  });
});

