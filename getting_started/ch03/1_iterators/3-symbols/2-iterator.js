/*
  This class makes use of generators and well-known symbols to iterate a countdown

  1. Why in this scenario we don't use the static keyword inside the class?
  2. Create a new Countdown instance and code a different way to iterate over it using the next() method.
  3. Create again a new Countdown instance and iterate over it without using the next() method.
*/

class Countdown {
  constructor(max) {
    this.max = max;
  }

  [Symbol.iterator] = function* () {
    while (this.max > 0) {
      yield this.max;
      this.max--;
    }
  };
}

const timeout = new Countdown(10);
console.log([...timeout]);
