/*
  1. You will find here the object myFibonacci that contains three properties:
    - last: the fibonacci number that goes before the current fibonacci number in the fibonacci sequence 
    - current: the current value depending on how many times the fibonacci function has been executed.
  2. Copy the fibonacci function you created last exercise and refactor it to become a this-aware function
  3. Iteratively called your new fibonacci function with your object as its execution context to progresivelly modify the current value of myFibonacci
  4. Each iteration that changes current, should print the current value in console.
*/

const myFibonacci = {
  last: undefined,
  current: undefined,
};
