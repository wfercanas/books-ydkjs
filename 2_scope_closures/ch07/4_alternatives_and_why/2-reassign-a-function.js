function foo() {
  console.log("hello");
}

foo = function () {
  console.log("world");
};

foo(); // What does it print? Why?
