export default function getListStudentIds(array) {
  // get studentId
  if (!Array.isArray(array)) {
    return [];
  }
  const studentId = array.map((obj) => obj.id);
  return studentId;
}
