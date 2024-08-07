/* Exercise
- Think about what does each console.log print
- If it doesn't print each i, how would you refactor the console.log's part of the program to make it work?
- Why it isn't necessary to create copies of i inside the loop?
*/

var keeps = [];

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    keeps[i] = () => i;
  }, 1000);
}

console.log(keeps[0]()); // What does it print? -->
console.log(keeps[1]()); // What does it print? -->
console.log(keeps[2]()); // What does it print? -->
