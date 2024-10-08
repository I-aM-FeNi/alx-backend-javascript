export default function getStudentsByLocation(list, city) {
  // Use the filter function to return students based on city
  return list.filter((student) => student.location === city);
}

