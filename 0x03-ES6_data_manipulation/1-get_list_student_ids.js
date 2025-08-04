export default function getListStudentIds(studentsArray) {
  if (Array.isArray(studentsArray)) {
    const studentsIds = studentsArray.map((student) => student.id);
    return studentsIds;
  }
  return [];
}
