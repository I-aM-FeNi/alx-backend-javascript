export default function getStudentIdsSum(students) {
  // Use reduce to sum all student ids
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}

