/*
  Uncomment one by one.
*/

senderAccount = 60000;
receiverAccount = 100;
const transfer = 50000;
tax = 0.01;

function addTransaction() {
  receiverAccount += transfer;
}

function extractTransaction() {
  transfer += transfer * tax;
  senderAccount -= transfer;
}

// 1
// addTransaction();
// console.log(receiverAccount); // What does it print? -->

// 2
// extractTransaction();
// console.log(senderAccount); // What does it print? -->

// 3
// Refactor to make functions pure
