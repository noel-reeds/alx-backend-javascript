export default function getStudentIdsSum(studentsArray) {
  const studentsIds = studentsArray.map((student) => student.id);
  const sumOfIds = studentsIds.reduce(
    (acc, curr) => acc + curr,
  );
  return sumOfIds;
}
