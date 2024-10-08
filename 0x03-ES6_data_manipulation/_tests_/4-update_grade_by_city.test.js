import getListStudents from '../0-get_list_students.js';
import updateStudentGradeByCity from '../4-update_grade_by_city.js';

describe('updateStudentGradeByCity', () => {
  it('should return an array of students for a specific city with their new grade', () => {
    const students = getListStudents();
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 }
    ];
    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
    expect(result).toEqual([
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 86
      },
      {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco',
        grade: 97
      }
    ]);
  });

  it('should return an array of students with grade "N/A" if no grade is found', () => {
    const students = getListStudents();
    const newGrades = [
      { studentId: 5, grade: 97 }
    ];
    const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
    expect(result).toEqual([
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 'N/A'
      },
      {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco',
        grade: 97
      }
    ]);
  });
});
