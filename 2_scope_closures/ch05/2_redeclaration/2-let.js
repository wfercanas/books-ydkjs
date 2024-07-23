let message = undefined;

function post() {
  {
    let message = "Hello World";
  }
  {
    let message = "Really?";
  }
  {
    let message = "Looks good!";
  }
  if (true) {
    let message = "I don't think so";
  }
  return message;
}

console.log(post()); // What does it print?? -->
