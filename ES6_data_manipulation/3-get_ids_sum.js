export default function getStudentIdsSum(students) {
  const myreduce = students.reduce((acc, val) => acc + val.id, 0);
  return myreduce;
}
