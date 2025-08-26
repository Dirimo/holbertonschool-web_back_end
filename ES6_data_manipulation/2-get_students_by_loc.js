export default function getStudentsByLocation(students, city) {
  const myfilter = students.filter((student) => student.location === city);
  return myfilter;
}
