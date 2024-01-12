/*
 1. Well-known symbols are a way to JS to extend the language capabilities without backward compatibility issues
 2. Symbol.hasInstance === @@hasInstance and is used to control the behavior of the instanceof operator

 Test the following code with and without the comments and compare results
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  // static [Symbol.hasInstance](obj) {
  //   console.log("Just kidding!", obj.name);
  //   return true;
  // }
}

const cat = new Animal("Sora");
const dog = { name: "Zeus" };
console.log(cat instanceof Animal);
console.log(dog instanceof Animal);
