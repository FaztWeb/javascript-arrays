import { students } from "./data/sample_data.js";

// const sortedStudents = students.sort(function (first, second) {
//   if (first.age > second.age) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedStudents = students.sort((a, b) => a.age > b.age ? 1 : -1)

// const sortedPoints = points.sort()
// const sortedPoints = points.sort((a, b) => a > b ? 1 : -1)

const sortedStudents = students.sort((a, b) => a.age - b.age);
