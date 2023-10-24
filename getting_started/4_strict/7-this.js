// Test in Node and the browser

// "use strict";
function declarativeThis() {
  console.log("declarative", this, "\n", "------------------------");
}

const expressiveThis = function () {
  console.log("expressive", this, "\n", "------------------------");
};

const arrowThis = () => {
  console.log("arrow", this, "\n", "------------------------");
};

declarativeThis();
expressiveThis();
arrowThis();
