// Is there any closure in this code? Why?

function Counter(start = 0) {
  let counter = start;

  function increase() {
    counter++;
  }

  function decrease() {
    counter--;
  }

  function print() {
    console.log(counter);
  }

  return {
    increase,
    decrease,
    print,
  };
}

const beans = Counter(0);
beans.increase();
beans.increase();
beans.increase();
beans.decrease();
beans.increase();
beans.decrease();
beans.print(); // What does this print? -->

// Can we directly assign a random number to counter? -->
// Is counter a candidate to be garbage collected? Why? -->
