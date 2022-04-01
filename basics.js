// add elements to start
// const array = [20, 30, 50, 60];

// [5, 7, ...array]
// const array2 = array.slice()
// array2

// add to the middle using slice
// const index = array.indexOf(50);

// [...array.slice(0, index), 40, ...array.slice(index)] //?

// using splice
// const result = array.slice()
// const index = result.indexOf(50) //?
// result.splice(index, 0, 40) //?
// result

const array = [1, 2, 3];
const [x, ...result] = array;

console.log(result);
