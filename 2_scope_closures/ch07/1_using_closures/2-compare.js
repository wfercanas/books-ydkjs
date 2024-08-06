function adder(num1) {
  return (num2) => num1 + num2;
}

const add10To = adder(10);
const addTenTo = adder(10);

console.log(add10To(5) === add10To(5)); // prints? -->
console.log(add10To(5) === add10To(7)); // prints? -->
console.log(add10To === add10To); // prints? -->
console.log(addTenTo(5) === add10To(5)); // prints? -->
console.log(addTenTo(5) === add10To(7)); // prints? -->
console.log(addTenTo === add10To); // prints? -->
