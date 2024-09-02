function double() {
  function foo() {
    bar();
  }
  let bar = foo;

  return [foo, bar];
}

let [foo, bar] = double();

// 1
console.log(foo === bar); // What does this print? Why? -->

// 2
bar = function () {
  console.log("bar");
};
console.log(foo === bar); // What does this print? Why? -->

// 3
foo(); // What does this print? Why? -->

// Does this exercise supports the by value or by reference approach? Why? -->
