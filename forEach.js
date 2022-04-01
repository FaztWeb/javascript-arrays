import { students } from "./data/sample_data.js";

// for(let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

// students.forEach(function (student, index, students) {
//   console.log(student)
//   console.log(index)
//   console.log(students)
// })

const fullnames = [];

students.forEach((student) => {
  fullnames.push(student.name + " " + student.lastname);
});

console.log(fullnames);
