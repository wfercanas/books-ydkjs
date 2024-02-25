// Hoisting

// ---------------------------------

{
  console.log("Hello");
}

// ---------------------------------
/*
{
  let greet = "hi";
  // const greet = "hi";
  // var greet = "hi";
}
console.log(greet);
*/

// ---------------------------------

/*
let number = 1;
console.log(number);
{
  let letter = "e";
  number = 2;
  console.log(number, letter);
}
// console.log(number);
// console.log(number, letter);
*/

// ---------------------------------
/*
let number = 1;
console.log("outer:", number);
{
  // let number = 2;
  number++;
  console.log("inner:", number);
}
console.log("outer:", number);
*/

// ---------------------------------
/*
function saySomething() {
  var greeting = "Hello";
  {
    greeting = "Howdy";
    let greeting = "hi";
    // var greeting = "hi"
    console.log(greeting);
  }
  console.log(greeting);
}
saySomething();
*/
