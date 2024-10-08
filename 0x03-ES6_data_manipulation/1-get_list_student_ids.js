export default function getListStudentIds(list) {
  // Check if the input is an array, if not return an empty array
  if (!Array.isArray(list)) {
    return [];
  }
  // Use the map function to extract and return the ids
  return list.map((student) => student.id);
}

