export default function getListStudents() {
  const students = [];
  const s1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const s2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const s3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  students.push(s1, s2, s3);
  return students;
}
