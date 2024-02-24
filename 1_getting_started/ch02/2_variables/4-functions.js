// Make all function calls work without changing the order of the delimited blocks
"use strict";

// 1-->
const book = {
  title: "YDKJS",
  author: "Kyle Simpson",
  edition: "2nd",
};

// 2-->
promoteBook();

// 3 -->
const promoteBook = () => {
  console.log("Hi!, check this awesome book:", book.printTitle());
};

// 4 -->
book.printAuthor(); // Kyle Simpson
book.printEdition(); // 2nd
