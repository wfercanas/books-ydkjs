/* Exercise
- Think about what would the print() execution print at the end.
- if print() is always at the end of the program, how would you refactor the print function to ensure in prints the latest value of num?
*/

function print() {
  setTimeout(() => {
    console.log(num);
  }, 0);
}

var num = 1;

setTimeout(() => {
  num = 3;
}, 0);

num = 2;

print(); // What does it print? -->
