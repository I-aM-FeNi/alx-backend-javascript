export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      // Find the corresponding grade for the student
      const gradeInfo = newGrades.find(grade => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeInfo ? gradeInfo.grade : 'N/A' // Set grade or 'N/A'
      };
    });
}

