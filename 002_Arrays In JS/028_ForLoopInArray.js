// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//putting the value in new array one by one

let array2 = [];

for (let j = 0; j < fruits.length; j++) {
  array2.push(fruits[j]);
}

console.log(array2);
