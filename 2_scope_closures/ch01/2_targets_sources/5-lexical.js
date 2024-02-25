{
  const hello = "hello";
  {
    let world = "world";
    {
      var exclamation = "!";
      {
        console.log(hello, world, exclamation);
      }
    }
  }
}

console.log(exclamation);
// console.log(hello, world, exclamation);
