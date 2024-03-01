// What does each console.log sentence print?

var print = function () {};
console.log(print.name); // ->

let hello = function world() {};
console.log(hello.name); // ->

function send() {}
console.log(send.name); // ->

const share = () => {};
console.log(share.name); // ->

const foo = function bar() {
  bar = function joe() {};
};
console.log(foo.name); // ->
