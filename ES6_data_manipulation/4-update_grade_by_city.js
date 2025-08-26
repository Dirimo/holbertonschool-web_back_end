export default function updateStudentGradeByCity(students, city, newGrades) {
  const myFilter = students.filter((student) => student.location === city);
  for (let i = 0; i < myFilter.length; i += 1) {
    for (let j = 0; j < newGrades.length; j += 1) {
      if (myFilter[i].id === newGrades[j].studentId) {
        myFilter[i].grade = newGrades[j].grade;
      }
    }
    if (!myFilter[i].grade) {
      myFilter[i].grade = 'N/A';
    }
  }
  return myFilter;
}
