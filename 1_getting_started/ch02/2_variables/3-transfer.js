/*
1- This program helps a user make a transfer and get the invoice
2- Currently the program isn't working properly, so think about how to fix it
3- Refactor without creating new variables or creating new blocks (scopes)
*/

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

function invoice(amount) {
  balance -= amount;
  console.log(`
    transfer: ${money}\n
    tax: ${tax}\n
    total: ${amount}\n
    New balance: ${balance}
  `);
}
