const readline = require("node:readline/promises").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = readline.question(`What's your name?\n`)
console.log(answer);
