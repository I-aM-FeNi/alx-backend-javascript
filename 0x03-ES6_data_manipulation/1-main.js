import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

// Test with a string input (not an array)
console.log(getListStudentIds('hello')); // Expected output: []

// Test with the output of getListStudents() (array of student objects)
console.log(getListStudentIds(getListStudents())); // Expected output: [1, 2, 5]
