import { points, students } from "./data/students";

// let total = 0;
// for (let i = 0; i < points.length; i++) {
//   total += points[i];
// }

// const total = points.reduce((total, point) => {
//   return total + point;
// }, 0);

const total = points.reduce((total, point) => total + point, 0);

const totalAges = students.reduce((total, student) => total + student.age, 0);

totalAges;
