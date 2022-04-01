import { students } from "./data/sample_data.js";

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

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

const result = developers.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, ...student.skills]));
}, []);

console.log(result);

// let total = 0

// for (let i = 0; i < students.length; i++) {
//   total += students[i].age
// }

// console.log(total)

// const result = students.reduce((total, student) => total + student.age, 0)

// console.log(result)
