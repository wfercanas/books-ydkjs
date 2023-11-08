// Execute recipe() with some parameters to print the transfer
// Refactor without creating new variables or creating new blocks (scopes)

"use strict";

try {
  balance = 5000;
  money = 1000;
} catch (e) {
  console.log(e);
}

function transfer(money) {
  tax = (4 * money) / 1000;
  amount = money + tax;
}

function recipe(amount) {
  balance -= amount;
  console.log(`
    transfer: ${money}\n
    tax: ${tax}\n
    total: ${amount}\n
    New balance: ${balance}
  `);
}

recipe();
