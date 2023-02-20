const max = Math.max(12,56,76,999,89);
// console.log(max);
const numbers = [12,54,63,987,456,321];
const largest = Math.max (...numbers);
// console.log(largest);

const numbers2 = [12,...numbers,145,123];
numbers.push(777);
numbers2.push(55);
console.log(numbers);
console.log(numbers2);