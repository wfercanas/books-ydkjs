// ----------------------------------------------------------------------------
/* Exercise: 
  1. Use yield with function generators to create a sequence of numbers from 0 to 10
  2. Print each value in console
  3. Stop printing when the done property of the Generator Object is equal to true.  
  4. Use a do-while loop to control the printing of the sequence.
  5. Use iteration variable to store each execution of next()
*/

const maxValue = 10;
const sequencer = sequenceGenerator(maxValue);
let iteration = undefined;

function* sequenceGenerator(maxValue) {}
