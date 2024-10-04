import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';

describe('createReportObject', () => {
  test('should create a report object with allEmployees and getNumberOfDepartments method', () => {
    const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie']),
    };
    const report = createReportObject(employees);

    expect(report.allEmployees).toEqual({
      engineering: ['Bob', 'Jane'],
      marketing: ['Sylvie'],
    });
    expect(report.getNumberOfDepartments()).toBe(2);
  });

  test('should handle empty employeesList', () => {
    const report = createReportObject({});
    
    expect(report.allEmployees).toEqual({});
    expect(report.getNumberOfDepartments()).toBe(0);
  });
});

