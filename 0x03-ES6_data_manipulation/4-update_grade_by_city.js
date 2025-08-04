export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsFromCity = students.filter((student) => student.location === city);
  const studentsByGrade = studentsFromCity.map((student) => {
    const gradeO = newGrades.find((grade) => student.id === grade.studentId);
    return {
      ...student,
      grade: gradeO ? gradeO.grade : 'N/A',
    };
  });
  return studentsByGrade;
}
