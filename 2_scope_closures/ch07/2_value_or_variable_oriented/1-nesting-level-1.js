/* Exercise
 - Make the console.log() at the end print the value of hello.
 - You can't change the declaration of hello.
 - You can't delete the block where hello is defined.
 - You can change the block definition where hello is defined (transform it to an if-block, for-block, function-block, etc.)
 - You can code inside and outside the block where hello is defined. 
*/

// You can change the definition of this block ->
{
  // hello must be a const
  const hello = "Hello";
}

console.log(); // Make it print "Hello"
