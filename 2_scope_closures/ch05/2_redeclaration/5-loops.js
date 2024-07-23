/*
  1- Refactor to make the console print the sequence 0, 1, 2, 3, ..., 9
  2- Change only the code that is allowed.
*/

// DON'T CHANGE THIS CODE !!
var printers = [];

// YOU CAN CODE BELOW -->
function printer() {
  return () => {
    console.log(i);
  };
}
for (var i = 0; i < 10; i++) {
  printers.push(printer(i));
}

// DON'T CHANGE THIS CODE !!
printers.forEach((printer) => printer());
