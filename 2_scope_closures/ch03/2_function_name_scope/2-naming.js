/*
  What does each console.log execution print to console?
*/

/* 1-->
console.log(log); // ->
console.log(print); // ->
*/

var log = function print() {
  /* 6 -->
  "use strict";
  */
  /* 5 -->
  print = "hello";
   */
  /* 3-->
  console.log(log); // ->
  */
  /* 4-->
  console.log(print); // ->
  console.log(log === print); // ->
  */
};

/* 2-->
console.log(log); // ->
console.log(print); // ->
*/

log();
