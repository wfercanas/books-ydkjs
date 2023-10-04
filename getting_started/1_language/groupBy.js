/*
  These exercises are related to the stage 3 proposal about creating Object.groupBy() and Map.groupBy() methods.
  
  Given an array of elements and a characteristic, make groups depending on such characteristic
  1- Separate odd numbers from even numbers
  2- Separate vowels from consonants
  3- Separate words by length
*/

const numbers = [1, 2, 3, 4, 5];
// Should return {odd: [1, 3, 5], even: [2, 4]}

const letters = ["a", "f", "e", "k", "j", "m"];
// Should return {vowels: ['a', 'e'], consonants: ['f', 'k', 'j', 'm']}

const words = [
  "hello",
  "sun",
  "flow",
  "ant",
  "mic",
  "fever",
  "mega",
  "looks",
  "finds",
  "reads",
  "init",
  "mark",
  "december",
];
// Should return {'3': ["sun", "ant", "mic"], '4': ["hello", "flow", "mega", "init", "mark"], '5': ["fever", "looks", "finds", "reads"], '8': ["december"]}

/* Traditional  -----------------------------------------
  Code here an implementation using a normal or traditional way of achieving the desired result
*/

/* GroupBy -------------------------------------------
  Code here the implementation using Object.groupBy(). Make sure that your version of Node supports the method.
*/

/* Test functions ------------------------------------
  Code here testing functions so you can visually check the expected vs. real results
*/

/* Executions ----------------------------------------
  Execute here the testing functions
*/
