/*
  Target: Object.groupBy() array method.

  The exercise then consists on:
  1- Create the functions to make the grouping work without using Object.groupBy()
  2- Use the functions created and make them work as polyfill for the Object.groupBy() method
  3- Refactor to use the Object.groupBy() method

  Note: remember to first create the test cases and then continue with the functions required.
*/

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
