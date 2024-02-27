let min = 1;
let max = 10;

const epsilon = 0.001;

function root(number) {
  if (number > 100 || number < 1) {
    throw new Error("Please enter a number between 1 and 100");
  }

  let guess = min;

  while (test(guess, number)) {
    if (attempt(guess, number) < 0) {
      min = guess;
    } else {
      max = guess;
    }
    guess = (min + max) / 2;
  }

  return guess;
}

function test(guess, number) {
  return Math.abs(guess ** 2 - number) > epsilon;
}

function attempt(guess, number) {
  return guess ** 2 - number;
}

console.log(root(3));
