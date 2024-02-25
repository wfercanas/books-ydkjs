// Change scope in runtime with eval
// "use strict";

function badIdea() {
  eval("var oops = 'Do not!'");
  console.log(oops);
}
badIdea();
