/*
  This code is just for creating two assignments and print them in console along with a literal.
  You can access then copy the code to see how it looks as an AST and bytecode:
  
  1- Copy the code in astexplorer.net and see the AST of the code. Change the parser to see different approaches.
  2- Using Node, execute this file using the flag --print-bytecode so you can see how Node transforms the AST to Bytecode.
  3- Using Node, execute this file using the flag --print-code so you can see how Node transforms Bytecode to unoptimized machine code
*/

var hello = "Hello";
let world = "World";

console.log(hello, world, "!");
