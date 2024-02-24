/*
  Try and Catch with fetch

  1- Copy the code in astexplorer.net and see the AST of the code. Change the parser to see different approaches.
  2- Using Node, execute this file using the flag --print-bytecode so you can see how Node transforms the AST to Bytecode.
  3- Using Node, execute this file using the flag --print-code so you can see how Node transforms Bytecode to unoptimized machine code

*/

const endpoint = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getPokemon() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data.abilities);
  } catch (err) {
    console.log("Error---->", err);
  } finally {
    console.log("Fetch complete");
  }
}

getPokemon();
