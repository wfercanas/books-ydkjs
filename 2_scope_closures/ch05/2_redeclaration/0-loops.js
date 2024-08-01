function trigger(number) {
  if (number === 10) {
    return false;
  } else {
    return true;
  }
}

var current = 0;
var last_i = undefined;

for (let i = {}; trigger(current); ) {
  i[current] = current;
  // console.log(i);
  console.log(last_i === i);
  last_i = i;
  current++;
}

// console.log("fuera", i);
