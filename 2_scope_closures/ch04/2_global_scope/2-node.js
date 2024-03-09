/* 1 -->
  - What does each log print?
*/

console.log(global);
// console.log(require);
// console.log(__dirname);

/* 2 -->
  - True or false?
*/
// console.log(require === global.require);
// console.log(__dirname === global.__dirname);

// console.log(global.require);
// console.log(global.__dirname);

/* 3 -->
  - Is the global object affected?
*/
// global.nickname = "goku";
// console.log(global);

/* 4 -->
  - What is printed?
*/
// global.hello = () => console.log("Hello");
// hello();
// function hello() {
//   console.log("Hola");
// }

/* 5 -->
  - True or false?
*/
// console.log(globalThis === global);

/* 6 -->
  - Export only the function in window.js file using CommonJS
  - Import that function here and try to run it
  - Does it fail? If so, why?
*/
