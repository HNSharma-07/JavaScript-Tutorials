//prototype are only of functions
//-----------------

let numbers = [1, 2, 3];
// let numbers = new Array(1, 2, 3); // internally arrays created like this

console.log(Array.prototype); // array ka prototype is always array

console.log(numbers);

console.log(Object.getPrototypeOf(numbers));

function hello() {
  console.log("hello");
}
console.log(hello.prototype);
