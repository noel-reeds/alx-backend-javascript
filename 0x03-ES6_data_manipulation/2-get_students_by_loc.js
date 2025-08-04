export default function getStudentsByLocation(studentsArray, city) {
  const studentsFromCity = studentsArray.filter((student) => student.location === city);
  return studentsFromCity;
}
