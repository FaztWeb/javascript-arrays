import { students } from "./data/students";

// let developers = [];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].course === "Web Development") {
//     developers.push(students[i]);
//   }
// }


// const developers = students.filter(function (student) {
//   if (student.course === "Web Development") {
//     // return student;
//     return true
//   }
// })

// const youngStudents = students.filter(function (student) {
//   if (student.age < 21) {
//     return true
//   }
// })


const developers = students.filter(student => student.course === "Web Development");
const youngStudents = students.filter(student => student.age < 21 );
