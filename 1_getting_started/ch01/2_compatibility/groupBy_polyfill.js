/*
  Target: Object.groupBy() array method.

  The exercise then consists on:
  1- Create the functions to make the grouping work using Object.groupBy() in node v21
  2- Refactor the code so the we can still use Object.groupBy() but in node v14 (polyfills)

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
// Should return {'3': ["sun", "ant", "mic"], '4': ["flow", "mega", "init", "mark"], '5': ["hello", "fever", "looks", "finds", "reads"], '8': ["december"]}
