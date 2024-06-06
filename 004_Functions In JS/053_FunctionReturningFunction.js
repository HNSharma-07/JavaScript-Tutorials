// Function returning Function

function myFunc() {
  function hello() {
    return "hello world";
  }
  return hello; // returing hello() function
}

const ans = myFunc(); // ans has become a variable now
console.log(ans()); //hello world
