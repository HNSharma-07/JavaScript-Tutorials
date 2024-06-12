// Closure Example 2
// power using closure
// This example shows how to use the closure to create a private variable

function outerFunc(power) {
  return function innerFunc(number) {
    return number ** power;
  };
}

let power = outerFunc(3);

let ans = power(2);

console.log(ans);
