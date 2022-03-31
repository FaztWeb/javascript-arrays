import { students } from "./data/students";

const result = students
  .map((student) => ({
    student: `${student.name} ${student.lastname}`,
    age: student.age,
  }))
  .filter((student) => student.age < 23)
  .sort((a, b) => a.age - b.age)
  .reduce((total, student) => total + student.age, 0);

result;
