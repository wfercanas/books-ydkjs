// 1. Run the program and check if the program works as you'd expect.
// 2. Refactor so the program throw all ReferenceErrors. Do it with just one line of code.
// 3. Make the program work without adding new lines of code (use the existing ones)

sports = ["basketball", "soccer", "swimming"];
favoriteSport = sports[0];

if (favoriteSport === "basketball") {
  favoritePlayer = "Stephen Curry";
}

if (favoriteSport === "soccer") {
  favoritePlayer = "Cristiano Ronaldo";
}

if (favoriteSport === "swimming") {
  favoritePlayer = "Michael Phelps";
}

console.log(favoritePlayer);
