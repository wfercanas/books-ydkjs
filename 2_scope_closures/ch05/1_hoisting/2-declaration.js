globalThis.firstname = "Miguel";

{
  hello(firstname); // What does this print? ->
}

{
  firstname = "Lucas";
}

function hello(msg) {
  console.log(msg);
}

{
  hello(firstname); // What does this print? ->
  const firstname = "Mateo";
  // let firstname = "Mateo";
  // var firstname = "Mateo";
  hello(firstname); // What does this print? ->
}

console.log(globalThis.firstname); // What does this print? ->
