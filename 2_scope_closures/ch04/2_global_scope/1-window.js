/*
  1- Try this code in the browser
  2- What does each console.log print?
*/

const firstname = "Mark";
let lastname = "Ruffalo";
var movie = "Poor Things";

let adjective = "atonishing";
// var adjective = "atonishing";
window.adjective = "great";

function recommend() {
  return `Please watch ${movie}, ${firstname} ${lastname} has an ${adjective} performance`;
}

console.log(window.firstname); // ->
console.log(window.lastname); // ->
console.log(window.movie); // ->
console.log(window.recommend()); // ->

module.export = { recommend };
