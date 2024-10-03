import { listOfStudents } from '../9-hoisting.js';

describe('StudentHolberton Tests', () => {
  test('should have correct properties', () => {
    expect(listOfStudents.length).toBe(5);

    const student = listOfStudents[0];
    expect(student.fullName).toBe('Guillaume Salva');
    expect(student.holbertonClass.year).toBe(2020);
    expect(student.holbertonClass.location).toBe('San Francisco');
  });

  test('should return correct full student descriptions', () => {
    const descriptions = listOfStudents.map(student => student.fullStudentDescription);
    const expectedDescriptions = [
      'Guillaume Salva - 2020 - San Francisco',
      'John Doe - 2020 - San Francisco',
      'Albert Clinton - 2019 - San Francisco',
      'Donald Bush - 2019 - San Francisco',
      'Jason Sandler - 2019 - San Francisco'
    ];

    expect(descriptions).toEqual(expectedDescriptions);
  });
});

