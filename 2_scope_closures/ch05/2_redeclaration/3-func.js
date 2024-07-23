/*
  Try to understand the code before uncommenting. 
  Uncomment one by one. Don't uncomment two exercises at the same time.
*/

// 1
print("TC39"); // What happens?  --> Does this work?

print = "JS rocks!";

// 2
// print("ECMA262"); // What happens?  --> TypeError

function print(text) {
  console.log(text);
}

// 3
// print("ES+"); // What happens?  --> TypeError

var print;

print = "Nothing like this";

function print() {
  console.log("Does this work?");
}

// 4
// print("JS"); // What happens?  --> TypeError
