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
