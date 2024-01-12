// ----------------------------------------------------------------------------
/* Use of yield with function generators */

/* Test the following code like this:
  1. Run the code as it is and analyze the results
  2. Uncomment one line at a time and run the code
  3. Uncomment all the body of indexGenerator() and analyze results

  Question 1: What does the yield operator do?
  Question 2: When will the done property be equal to true?
  Question 3: What could happen if we add a fourth console.log()?
*/

function* indexGenerator() {
  let i = 0;
  yield i;
  yield i + 1;
  yield i + 2;
}

const index = indexGenerator();
console.log("First log:", index.next());
console.log("Second log:", index.next());
console.log("Third log:", index.next());
