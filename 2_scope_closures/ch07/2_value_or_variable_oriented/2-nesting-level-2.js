/* Exercise
 - Make the console.log() at the end print the values of hello and world variables.
 - You can't change the declarations of hello and world variables.
 - You can't delete the blocks where hello and world are defined.
 - You can change the block definition where hello and world are defined (transform them to if-blocks, for-blocks, function-blocks, etc.)
 - You can code inside/outside the blocks. 
*/

// You can change the definitions of both blocks
{
  // hello must be a const
  const hello = "Hello";
}
{
  // world must be a const
  const world = "World";
}

console.log(); // Make it print "Hello World"
