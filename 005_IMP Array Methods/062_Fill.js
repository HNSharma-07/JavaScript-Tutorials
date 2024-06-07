// Fill method
// change original array
// value , startindex , endindex

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.fill(0, 2, 5);
console.log(myArray); // [1, 2, 0, 0, 0, 6, 7, 8]

const myArray1 = new Array(10).fill(0);
console.log(myArray1); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const myArray2 = new Array(10).fill(0, 2, 5);
console.log(myArray2); // [ <2 empty items>, 0, 0, 0, <5 empty items> ]
console.log(myArray2[1]); // undefined
console.log(myArray2[3]); // 0
