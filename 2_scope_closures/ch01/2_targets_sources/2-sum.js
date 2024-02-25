/*
Targets:
1-

Sources:
1- 

*/

const set1 = [1, 2, 3, 4, 5];
const set2 = [10, 11, 12, 13, 14];

const numbers = [...set1, ...set2];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
