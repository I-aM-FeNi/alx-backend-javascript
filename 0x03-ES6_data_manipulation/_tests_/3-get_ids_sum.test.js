import getListStudents from '../0-get_list_students.js';
import getStudentIdsSum from '../3-get_ids_sum.js';

describe('getStudentIdsSum', () => {
  it('should return the sum of all student ids', () => {
    const students = getListStudents();
    const result = getStudentIdsSum(students);
    expect(result).toBe(8);
  });

  it('should return 0 if the list is empty', () => {
    const result = getStudentIdsSum([]);
    expect(result).toBe(0);
  });
});
