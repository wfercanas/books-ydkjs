/* Generator Functions conform to the Iterable protocol */

// Generator function
function* timeGenerator() {
  console.log(new Date());
}

// Protocol usage
const time = timeGenerator();
time.next();
