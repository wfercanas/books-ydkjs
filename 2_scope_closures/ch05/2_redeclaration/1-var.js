console.log(post()); // What does it print?? -->
var message = undefined;

function post() {
  var message;
  {
    var message = "Hello World";
  }
  {
    var message = "Really?";
  }
  {
    var message = "Looks good!";
  }
  if (true) {
    var message = "I don't think so";
  }
  return message;
}
