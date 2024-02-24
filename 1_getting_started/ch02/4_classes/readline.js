const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?\n`, (name) => {
  console.log(`Hi ${name}`);
  readline.close();
});
