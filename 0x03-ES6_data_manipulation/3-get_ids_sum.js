export default function getStudentIdsSum(studentList) {
  return studentList.map((student) => student.id).reduce(
    (previousStudent, currentStudent) => previousStudent + currentStudent,
  );
}
