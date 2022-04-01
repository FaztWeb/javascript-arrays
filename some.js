import { students } from "./data/sample_data.js";

const result = students.some((student) => student.lastname === "Doe");

console.log(result);
