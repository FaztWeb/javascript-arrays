import { students } from "./data/students";

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   console.log(student);
// }

// students.forEach((student, index, students) => {
//   console.log(`${index}: ${student.name}`);
// });

students.forEach((student, i) => console.log(`${i}, ${student.name}`));
